import mongoose from 'mongoose';
require('dotenv').config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

export default mongoose.connect(
  `mongodb+srv://${username}:${password}@ecommerce.ustac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
