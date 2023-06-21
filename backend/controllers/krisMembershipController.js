const KrisMembership = require('../models/KrisMembership');

// Create a new membership
async function createMembership(req, res) {
    try {
        const membership = await KrisMembership.create(req.body);
        res.status(201).json(membership);
    } catch (error) {
        console.error('Failed to create membership:', error);
        res.status(500).json({ error: 'Failed to create membership' });
    }
}

// Get all memberships
async function getAllMemberships(req, res) {
    try {
        const memberships = await KrisMembership.find();
        res.json(memberships);
    } catch (error) {
        console.error('Failed to get memberships:', error);
        res.status(500).json({ error: 'Failed to get memberships' });
    }
}

// Get a membership by ID
async function getMembershipById(req, res) {
    const { id } = req.params;
    try {
        const membership = await KrisMembership.findById(id);
        if (!membership) {
            return res.status(404).json({ error: 'Membership not found' });
        }
        res.json(membership);
    } catch (error) {
        console.error('Failed to get membership:', error);
        res.status(500).json({ error: 'Failed to get membership' });
    }
}

// Update a membership by ID
async function updateMembership(req, res) {
    const { id } = req.params;
    try {
        const membership = await KrisMembership.findByIdAndUpdate(id, req.body, {
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

// Delete a membership by ID
async function deleteMembership(req, res) {
    const { id } = req.params;
    try {
        const membership = await KrisMembership.findByIdAndDelete(id);
        if (!membership) {
            return res.status(404).json({ error: 'Membership not found' });
        }
        res.json(membership);
    } catch (error) {
        console.error('Failed to delete membership:', error);
        res.status(500).json({ error: 'Failed to delete membership' });
    }
}


module.exports = {
    createMembership,
    getAllMemberships,
    getMembershipById,
    updateMembership,
    deleteMembership,
};