import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
  github_username: String,
  tags: [String],
  repos: [
    {
      name: String,
      description: String,
      language: String,
    },
  ],
});

export default mongoose.model('Repository', RepositorySchema);
