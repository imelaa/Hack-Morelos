// lib/visionClient.js
const vision = require('@google-cloud/vision');

// Crea un cliente
const client = new vision.ImageAnnotatorClient({
  keyFilename: '0bd19a5ed1e1129fba13a97b1fd7406bb16709aa', // ruta a tu archivo JSON
});

module.exports = client;
