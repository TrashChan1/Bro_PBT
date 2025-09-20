require('dotenv').config();

const ENV = {};
ENV.MONGO_URI = process.env.MONGO_URI;
//ENV.MONGO_URI = "mongodb://127.0.0.1:27017";
module.exports = ENV;
