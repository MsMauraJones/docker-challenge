const mongoose = require('mongoose');
// replace this URL below with your connection string from your MongoDB

const DB_CONNECTION = process.env.DB_CONNECTION;

let mongoDB = DB_CONNECTION;

module.exports = mongoose.connect(mongoDB);
