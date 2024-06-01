// lib/visionClient.js
const vision = require('@google-cloud/vision');

// Crea un cliente
const client = new vision.ImageAnnotatorClient({
  keyFilename: '', // ruta a tu archivo JSON
});

module.exports = client;
