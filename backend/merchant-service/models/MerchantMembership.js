const mongoose = require('mongoose');

// Schema for Merchant
const merchantMembershipSchema = new mongoose.Schema({
    merchantName: {
    type: String,
    required: true
  },
  membershiplevels: [
    {
    membershipLevel: {
        type: String,
        required: true
      },
    Benefits: [
        {
        benefit: {
            type: String,
            required: true
            }
        }
    ]
    }
  ]
});

// Create Merchant model
const MerchantMembership = mongoose.model('MerchantMembership', merchantMembershipSchema);

module.exports = MerchantMembership;
