const express = require('express');
const router = express.Router();
const merchantMembershipController = require('../controllers/merchantMembershipController');

// Create a new membership
router.post('/submit', merchantMembershipController.createMembership);

// Get all memberships
router.get('/', merchantMembershipController.getAllMemberships);

// Get a membership by ID
router.get('/:id', merchantMembershipController.getMembershipById);

// Update a membership by ID
router.put('/:id', merchantMembershipController.updateMembership);

// Delete a membership by ID
router.delete('/:id', merchantMembershipController.deleteMembership);

module.exports = router;
