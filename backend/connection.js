const mongoose = require('mongoose');
// replace this URL below with your connection string from your MongoDB

let mongoDB = `mongodb+srv://tomokochi:asL3s3PFNwMBPCe@cluster0.kc4gfds.mongodb.net/photo_log?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
