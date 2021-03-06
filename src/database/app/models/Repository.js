const mongoose = require('mongoose');

const RepositorySchema = new mongoose.Schema({
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
  github_username: String,
  tags: [String],
  repos: [
    {
      node_id: String,
      name: String,
      description: String,
      html_url: String,
      language: String,
      stargazers_count: Number,
      watchers_count: Number,
    },
  ],
});

module.exports = mongoose.model('Repository', RepositorySchema);
