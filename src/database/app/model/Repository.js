import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
  github_username: String,
  tags: [String],
  repos: [
    {
      name: String,
      description: String,
      language: String,
    },
  ],
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Repository', RepositorySchema);
