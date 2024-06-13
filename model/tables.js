// Include your database connection setup here
const db = require('../routes/db');

// Create ServiceType Table
const createServiceTypeTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS ServiceType (
            service_type_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating ServiceType table:', err);
        else console.log('ServiceType table created successfully');
    });
};

// Create MenuItem Table
const createMenuItemTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS MenuItem (
            item_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(10, 2),
            image BLOB,
            type_of_food VARCHAR(50),
            status BOOLEAN DEFAULT true
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating MenuItem table:', err);
        else console.log('MenuItem table created successfully');
    });
};

// Create MenuItemServiceType Table
const createMenuItemServiceTypeTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS MenuItemServiceType (
            item_id INT,
            service_type_id INT,
            PRIMARY KEY (item_id, service_type_id),
            FOREIGN KEY (item_id) REFERENCES MenuItem(item_id),
            FOREIGN KEY (service_type_id) REFERENCES ServiceType(service_type_id)
        )
    `;
    db.query(sql, (err) => {
        if (err) {
            console.error('Error creating MenuItemServiceType table:', err);
        } else {
            console.log('MenuItemServiceType table created successfully');
        }
    });
};

// Create Cook Table
const createCookTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Cook (
            cook_id INT PRIMARY KEY,
            name VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Cook table:', err);
        else console.log('Cook table created successfully');
    });
};

// Create Admin Table
const createAdminTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Admin (
            admin_id INT PRIMARY KEY,
            name VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Admin table:', err);
        else console.log('Admin table created successfully');
    });
};

// Create AdOnService Table
const createAdOnServiceTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS AdOnService (
            ad_service_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(10, 2),
            status BOOLEAN
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating AdOnService table:', err);
        else console.log('AdOnService table created successfully');
    });
};

// Create DailySales Table
const createDailySalesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS DailySales (
            sale_date DATE PRIMARY KEY,
            total_sales DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating DailySales table:', err);
        else console.log('DailySales table created successfully');
    });
};

// Create WeeklySales Table
const createWeeklySalesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS WeeklySales (
            week_number INT PRIMARY KEY,
            total_sales DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating WeeklySales table:', err);
        else console.log('WeeklySales table created successfully');
    });
};

// Create MonthlySales Table
const createMonthlySalesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS MonthlySales (
            month_year VARCHAR(10) PRIMARY KEY,
            total_sales DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating MonthlySales table:', err);
        else console.log('MonthlySales table created successfully');
    });
};

// Create Order Table
const createOrderTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS OrderTable (
            order_id INT PRIMARY KEY AUTO_INCREMENT,
            customer_name VARCHAR(255),
            customer_phone_number VARCHAR(20),
            total_cost DECIMAL(10, 2),
            status VARCHAR(50) DEFAULT 'Pending',
            table_or_room_number VARCHAR(50),
            service_type_id INT,
            FOREIGN KEY (service_type_id) REFERENCES ServiceType(service_type_id)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Order table:', err);
        else console.log('Order table created successfully');
    });

    // Create OrderItem table
    const createOrderItemTableSql = `
    CREATE TABLE IF NOT EXISTS OrderItem (
        order_item_id INT PRIMARY KEY AUTO_INCREMENT,
        order_id INT,
        item_id INT,
        item_name VARCHAR(255),  -- Added item_name column
        FOREIGN KEY (order_id) REFERENCES OrderTable(order_id),
        FOREIGN KEY (item_id) REFERENCES MenuItem(item_id)
        )
    `;
    db.query(createOrderItemTableSql, (err) => {
        if (err) console.error('Error creating OrderItem table:', err);
        else console.log('OrderItem table created successfully');
    });
};

// Create AdminLogin Table
const createAdminLoginTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS AdminLogin (
            username VARCHAR(255) PRIMARY KEY,
            password VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating AdminLogin table:', err);
        else console.log('AdminLogin table created successfully');
    });
};

// Create CookLogin Table
const createCookLoginTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS CookLogin (
            username VARCHAR(255) PRIMARY KEY,
            password VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating CookLogin table:', err);
        else console.log('CookLogin table created successfully');
    });
};

module.exports = {
    createServiceTypeTable,
    createMenuItemTable,
    createMenuItemServiceTypeTable,
    createOrderTable,
    createCookTable,
    createAdminTable,
    createAdOnServiceTable,
    createDailySalesTable,
    createWeeklySalesTable,
    createMonthlySalesTable,
    createAdminLoginTable,
    createCookLoginTable
};
