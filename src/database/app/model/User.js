import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  github_username: String,
  repos: [
    {
      name: String,
      description: String,
      language: String,
      tags: String,
    },
  ],
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('User', UserSchema);
