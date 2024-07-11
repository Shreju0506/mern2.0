const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Store', StoreSchema);
