// socket-client.js
console.log('Socket client is starting...');

const io = require('socket.io-client');

const socket = io('http://localhost:3000'); // Replace with your server URL

socket.on('connect', () => {
  console.log('Connected to the Socket.IO server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from the Socket.IO server');
});

// Optional: Listen to custom events emitted by the server
socket.on('orderNotification', (data) => {
  console.log('Received order notification:', data);
});

// Optional: Simulate sending an order notification to the server
// Uncomment and run this block to test order notifications
/*
setTimeout(() => {
  socket.emit('orderNotification', { message: 'New order received!' });
}, 5000);
*/

// Uncomment the block above to test order notifications after a delay
