const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const db = require('./routes/db');
const tables = require('./model/tables');
const generateQRCode = require('./qrGenerator.js'); 
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors()); 

// Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Define API routes
app.use('/', require('./routes/routes'));

// Generate QR codes for specific routes
const routes = [
    { name: 'Hotel', url: 'https://mejbanempire.in/hotel' },
    { name: 'Cafe', url: 'https://mejbanempire.in/cafe' },
    { name: 'Restaurant', url: 'https://mejbanempire.in/resturant' }
];

// Generate QR codes for each route
routes.forEach((route) => {
    const filename = `${route.name.toLowerCase()}.png`; 
    generateQRCode(route.url, filename);
});

// All other routes should serve the React app
app.get('*', (req, res) => {
    console.log("Sending file:", path.join(__dirname, 'client/dist', 'index.html'));
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Initialize Database Tables
tables.createServiceTypeTable();
tables.createMenuItemTable();
tables.createMenuItemServiceTypeTable();
tables.createOrderTable();
tables.createCookTable();
tables.createAdminTable();
tables.createAdOnServiceTable();
tables.createDailySalesTable();
tables.createWeeklySalesTable();
tables.createMonthlySalesTable();
tables.createAdminLoginTable();
tables.createCookLoginTable();

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    io.emit('serverMessage', { message: 'Server is now running' });
});
