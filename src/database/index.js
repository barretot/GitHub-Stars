const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/github-tags', {
  useNewUrlParser: true,
});
