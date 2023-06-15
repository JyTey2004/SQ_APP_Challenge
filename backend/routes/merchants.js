const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchantController');

// Create a new merchant
router.post('/submit', merchantController.createMerchant);

// Get all merchants
router.get('/', merchantController.getAllMerchants);

// Get a merchant by ID
router.get('/:id', merchantController.getMerchantById);

// Update a merchant by ID
router.put('/:id', merchantController.updateMerchant);

// Delete a merchant by ID
router.delete('/:id', merchantController.deleteMerchant);

module.exports = router;
