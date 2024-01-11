

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = {ReviewModel};
