const mongoose = require('mongoose');

// Schema for Merchant
const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  offer: {
    type: String,
  },
  locations: [
    {
      type: String
    }
  ],
  items: [
    {
      name: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      prices: [
        {
          location: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ]
});

// Create Merchant model
const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;
