const mysql = require('mysql2');

// Database connection setup
const pool = mysql.createPool({
  host: '34.71.38.114',
  user: 'admin',
  password: '123456789',
  database: 'hotel',
  waitForConnections: true, 
  connectionLimit: 10, 
  queueLimit: 0 
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting database connection from the pool:', err);
  } else {
    console.log('Connected to the database');
    connection.release(); 
  }
});

module.exports = pool;
