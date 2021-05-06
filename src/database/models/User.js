import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const carroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', carroSchema);
