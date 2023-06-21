const mongoose = require('mongoose');

// Schema for Merchant
const krisMembershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  krisMembershipLevel: {
    type: String,
    required: true
  },
  mainImg: {
    type: String,
  },
  memberships: [
    {
      merchantName: {
        type: String,
        required: true
      },
      membershipLevel: {
        type: String,
        required: true
      }
    }
  ]
});

// Create Merchant model
const KrisMembership = mongoose.model('krisMembership', krisMembershipSchema);

module.exports = KrisMembership;
