const express = require('express');
const router = express.Router();
const db = require('./db');


// Route to handle admin login
router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
  }

  // Query the database to check if the provided username and password exist in the AdminLogin table
  const sql = `SELECT * FROM AdminLogin WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, results) => {
      if (err) {
          console.error('Error checking admin login details:', err);
          return res.status(500).json({ error: 'Internal server error' });
      }

      // Check if any rows were returned from the query
      if (results.length === 1) {
          // Admin login successful
          return res.status(200).json({ message: 'Admin login successful' });
      } else {
          // Admin login failed
          return res.status(401).json({ error: 'Invalid username or password' });
      }
  });
});


// Route to handle adding cook login details and login authentication
router.post('/cook/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
  }

  // Query the database to check if the provided username and password exist in the CookLogin table
  const sql = `SELECT * FROM CookLogin WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, results) => {
      if (err) {
          console.error('Error checking cook login details:', err);
          return res.status(500).json({ error: 'Internal server error' });
      }

      // Check if any rows were returned from the query
      if (results.length === 1) {
          // Cook login successful
          return res.status(200).json({ message: 'Cook login successful' });
      } else {
          // Cook login failed
          return res.status(401).json({ error: 'Invalid username or password' });
      }
  });
});

// Define a route to add data to the AdOnService table
router.post('/add-adon-service', (req, res) => {
  const { name, price } = req.body; // Assuming the request body contains the 'name' and 'price' of the AdOnService

  // Set default value for status to true
  const status = true;

  const sql = `INSERT INTO AdOnService (name, price, status) VALUES (?, ?, ?)`; // Update SQL query to include status
  db.query(sql, [name, price, status], (err, result) => {
      if (err) {
          console.error('Error adding data to AdOnService table:', err);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          console.log('Data added to AdOnService table successfully');
          res.status(200).json({ message: 'Data added to AdOnService table successfully' });
      }
  });
});

// Define a route to fetch data from the AdOnService table
router.get('/adon-service', (req, res) => {
  const sql = `SELECT * FROM AdOnService`;
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error fetching AdOnService data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          console.log('AdOnService data fetched successfully');
          res.status(200).json({ data: result });
      }
  });
});

// Get all customers
router.get('/customers', (req, res) => {
  db.query('SELECT * FROM Customer', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Updated route for creating a menu item
router.post('/menu', (req, res) => {
  const { name, price, service_type_ids } = req.body;

  // Insert into MenuItem table
  const menuItemSql = 'INSERT INTO MenuItem (name, price) VALUES (?, ?)';
  db.query(menuItemSql, [name, price], (err, result) => {
    if (err) {
      console.error('Error creating menu item:', err);
      res.status(500).send(`Error creating menu item: ${err.message}`);
    } else {
      console.log('Menu item created successfully');
      // Insert into MenuItemServiceType table for each service type ID
      const menuItemId = result.insertId; // Get the auto-generated item_id
      const menuItemServiceTypeSql = 'INSERT INTO MenuItemServiceType (item_id, service_type_id) VALUES (?, ?)';
      
      service_type_ids.forEach(service_type_id => {
        // Check if the service_type_id exists in the servicetype table
        const checkServiceTypeSql = 'SELECT * FROM ServiceType WHERE service_type_id = ?';
        db.query(checkServiceTypeSql, [service_type_id], (err, result) => {
          if (err) {
            console.error('Error checking service type:', err);
          } else if (result.length > 0) {
            // If the service type exists, insert it into the MenuItemServiceType table
            db.query(menuItemServiceTypeSql, [menuItemId, service_type_id], (err, result) => {
              if (err) {
                console.error('Error creating MenuItemServiceType:', err);
              }
            });
          } else {
            console.error(`Service type ${service_type_id} does not exist`);
          }
        });
      });
      res.status(201).send('Menu item created successfully');
    }
  });
});

// Get all menu items with their associated service types
router.get('/menu', (req, res) => {
  const sql = `
    SELECT 
      mi.item_id,
      mi.name,
      mi.price,
      mi.image,
      mi.status,
      GROUP_CONCAT(mst.service_type_id) AS service_type_ids
    FROM 
      MenuItem AS mi
    LEFT JOIN 
      MenuItemServiceType AS mst ON mi.item_id = mst.item_id
    GROUP BY 
      mi.item_id
  `;

  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Create route to change the status of menu item
router.put('/menu/:id', (req, res) => {
  const itemId = req.params.id;
  const { status } = req.body;

  // Query to update the status of the menu item in the database
  const sql = `UPDATE MenuItem SET status = ? WHERE item_id = ?`;
  db.query(sql, [status, itemId], (err, result) => {
      if (err) {
          console.error('Error updating status of menu item:', err);
          res.status(500).json({ error: 'Error updating status of menu item' });
      } else {
          console.log('Status of menu item updated successfully');
          res.status(200).json({ message: 'Status updated successfully' });
      }
  });
});

// Create a new Order
router.post('/orders', (req, res) => {
  const { customer_name, customer_phone_number, total_cost, table_or_room_number, service_type_id, items } = req.body;
  const status = 'Pending'; 

  // Insert into OrderTable
  const insertOrderQuery = 'INSERT INTO OrderTable (customer_name, customer_phone_number, total_cost, table_or_room_number, service_type_id) VALUES (?, ?, ?, ?, ?)';
  db.query(insertOrderQuery, [customer_name, customer_phone_number, total_cost, table_or_room_number, service_type_id], (err, result) => {
    if (err) {
      console.error('Error inserting order:', err);
      res.status(500).send('Error creating order');
      return;
    }
  
    const order_id = result.insertId;

    // Check if items array is not empty
    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).send('Items array cannot be empty');
      return;
    }

    // Insert the order items into the OrderItem table
    const insertOrderItemQuery = 'INSERT INTO OrderItem (order_id, item_id, item_name) VALUES (?, ?, ?)';
    let insertPromises = [];

    // Insert each item into the OrderItem table
    items.forEach(item => {
      const { item_id, item_name } = item;
      insertPromises.push(new Promise((resolve, reject) => {
        db.query(insertOrderItemQuery, [order_id, item_id, item_name], (err, result) => {
          if (err) {
            console.error('Error inserting order item:', err);
            reject(err);
          } else {
            console.log('Order item inserted successfully');
            resolve(result);
          }
        });
      }));
    });

    // Execute all insertion promises
    Promise.all(insertPromises)
      .then(() => {
        console.log('All order items inserted successfully');
        // Set the response status to 201 Created
        res.status(201).send('Order created successfully');
      })
      .catch((err) => {
        console.error('Error creating order:', err);
        res.status(500).send('Error creating order');
      });
  });
});

// Fetch New Order
router.get('/orders/new', (req, res) => {
  const sql = `
    SELECT ot.order_id, ot.customer_name, ot.customer_phone_number, ot.total_cost, ot.status, ot.table_or_room_number, ot.service_type_id, oi.item_name
    FROM OrderTable ot
    INNER JOIN OrderItem oi ON ot.order_id = oi.order_id
    WHERE ot.status = 'Pending'
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching new orders:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Check if there are results
      if (results && results.length > 0) {
        res.status(200).json(results); // Return 200 OK with the results
      } else {
        res.status(404).json({ message: 'No new orders found' }); // Return 404 Not Found
      }
    }
  });
});

// Update the order status to Accepted
router.patch('/orders/accept/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const updateOrderSQL = 'UPDATE OrderTable SET status = "Accepted" WHERE order_id = ?';
  db.query(updateOrderSQL, [orderId], (err, result) => {
    if (err) {
      console.error('Error accepting order:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Order accepted successfully' });
    }
  });
});

// Update the order status to Completed
router.patch('/orders/complete/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const updateOrderSQL = 'UPDATE OrderTable SET status = "Completed" WHERE order_id = ?';
  db.query(updateOrderSQL, [orderId], (err, result) => {
    if (err) {
      console.error('Error completing order:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Order completed successfully' });
    }
  });
});

// Fetch order history
router.get('/orders/history', (req, res) => {
  const sql = 'SELECT * FROM OrderTable WHERE status = "Accepted"';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching order history:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Fetch accepted orders with order items
router.get('/orders/accepted', (req, res) => {
  // SQL query to fetch orders with status 'Accepted' along with their items
  const sql = `
      SELECT OrderTable.*, OrderItem.item_name
      FROM OrderTable
      INNER JOIN OrderItem ON OrderTable.order_id = OrderItem.order_id
      WHERE OrderTable.status = 'Accepted'
  `;
  
  // Execute the query
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Error fetching accepted orders:', err);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(results); // Send the fetched data as a response
      }
  });
});

// Route to add a new service
router.post('/add-service', (req, res) => {
  // Extract service data from the request body
  const { name } = req.body;

  // SQL query to insert the new service into the database
  const sql = 'INSERT INTO ServiceType (name) VALUES (?)';

  // Execute the SQL query with the provided service name
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.error('Error adding service:', err);
      res.status(500).json({ error: 'Error adding service' });
    } else {
      console.log('Service added successfully');
      res.status(201).json({ message: 'Service added successfully' });
    }
  });
});

// Route to add predefined services
router.post('/add-predefined-services', (req, res) => {
  // Array of predefined services
  const predefinedServices = [
    { name: 'Hotel' },
    { name: 'Cafe' },
    { name: 'Restaurant' }
  ];

  // SQL query to insert predefined services into the database
  const sql = 'INSERT INTO ServiceType (name) VALUES ?';

  // Extracting service names from predefinedServices array
  const serviceNames = predefinedServices.map(service => [service.name]);

  // Execute the SQL query with the array of service names
  db.query(sql, [serviceNames], (err, result) => {
    if (err) {
      console.error('Error adding predefined services:', err);
      res.status(500).json({ error: 'Error adding predefined services' });
    } else {
      console.log('Predefined services added successfully');
      res.status(201).json({ message: 'Predefined services added successfully' });
    }
  });
});



// QR Code Scanner for each Portal
const portalQRData = [
  { portalID: 1, qrCode: 'hotel_qr_code_1', portalName: 'Hotel' },
  { portalID: 2, qrCode: 'cafe_qr_code_1', portalName: 'Cafe' },
  { portalID: 3, qrCode: 'restaurant_qr_code_1', portalName: 'Restaurant' },
];

router.get('/scan/:qrCode', (req, res) => {
  const scannedQRCode = req.params.qrCode;
  const portal = portalQRData.find(p => p.qrCode === scannedQRCode);

  if (portal) {
    res.redirect(`/${portal.portalName.toLowerCase()}`);
  } else {
    res.status(404).send('Invalid QR Code');
  }
});

module.exports = router;
