

const mongoose = require('mongoose');

const SnippetSchema = new mongoose.Schema({
  story: {
    type: String,
    required: true
  },
  
  author: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  
  publish_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Snippet = mongoose.model('Snippet', SnippetSchema);