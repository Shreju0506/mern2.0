const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 16,
  },
  address: {
    type: String,
    maxlength: 400,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'store-owner'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', UserSchema);
