require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const nameDB = process.env.MONGO_NAME_DB;

module.exports = mongoose.connect(
  `mongodb+srv://${username}:${password}@ecommerce.ustac.mongodb.net/${nameDB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
