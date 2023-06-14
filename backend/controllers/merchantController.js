const Merchant = require('../models/Merchant');

// Create a new merchant
async function createMerchant(req, res) {
  try {
    const merchant = await Merchant.create(req.body);
    res.status(201).json(merchant);
  } catch (error) {
    console.error('Failed to create merchant:', error);
    res.status(500).json({ error: 'Failed to create merchant' });
  }
}

// Get all merchants
async function getAllMerchants(req, res) {
  try {
    const merchants = await Merchant.find();
    res.set('Access-Control-Allow-Origin', 'http://localhost:19000')
    res.json(merchants);
  } catch (error) {
    console.error('Failed to get merchants:', error);
    res.status(500).json({ error: 'Failed to get merchants' });
  }
}

// Get a merchant by ID
async function getMerchantById(req, res) {
  const { id } = req.params;
  try {
    const merchant = await Merchant.findById(id);
    if (!merchant) {
      return res.status(404).json({ error: 'Merchant not found' });
    }
    res.json(merchant);
  } catch (error) {
    console.error('Failed to get merchant:', error);
    res.status(500).json({ error: 'Failed to get merchant' });
  }
}

// Update a merchant by ID
async function updateMerchant(req, res) {
  const { id } = req.params;
  try {
    const merchant = await Merchant.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!merchant) {
      return res.status(404).json({ error: 'Merchant not found' });
    }
    res.json(merchant);
  } catch (error) {
    console.error('Failed to update merchant:', error);
    res.status(500).json({ error: 'Failed to update merchant' });
  }
}

// Delete a merchant by ID
async function deleteMerchant(req, res) {
  const { id } = req.params;
  try {
    const merchant = await Merchant.findByIdAndDelete(id);
    if (!merchant) {
      return res.status(404).json({ error: 'Merchant not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error('Failed to delete merchant:', error);
    res.status(500).json({ error: 'Failed to delete merchant' });
  }
}

module.exports = {
  createMerchant,
  getAllMerchants,
  getMerchantById,
  updateMerchant,
  deleteMerchant,
};
