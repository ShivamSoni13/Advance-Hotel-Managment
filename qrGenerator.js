const qr = require('qrcode');
const fs = require('fs');
const path = require('path');

// Function to generate QR code for a URL and save it
async function generateQRCode(url, filename) {
    try {
        await qr.toFile(path.join(__dirname, 'QRcodes', filename), url);
        console.log(`QR code generated for ${url}`);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
}

module.exports = generateQRCode;
