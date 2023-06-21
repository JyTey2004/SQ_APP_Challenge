const express = require('express');
const router = express.Router();
const krisMembershipController = require('../controllers/krisMembershipController');

// Create a new membership
router.post('/submit', krisMembershipController.createMembership);

// Get all memberships
router.get('/', krisMembershipController.getAllMemberships);

// Get a membership by ID
router.get('/:id', krisMembershipController.getMembershipById);

// Update a membership by ID
router.put('/:id', krisMembershipController.updateMembership);

// Delete a membership by ID
router.delete('/:id', krisMembershipController.deleteMembership);

module.exports = router;
