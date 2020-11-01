const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
    trim: true,
  },
  series: {
    type: Number,
    required: true,
    trim: true,
  },
  episode: {
    type: Number,
    required: true,
    trim: true,
  },
  episode_name: {
    type: String,
    required: true,
    trim: true,
  },
  character: {
    type: String,
    required: true,
    trim: true,
  },
  character_img: {
    type: String,
  },
  synopsis: {
    type: String,
    required: false,
    trim: true,
  },
  aired: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quote', QuoteSchema);
