const Client = require('../models/Client');

// @desc    Get all clients
// @route   GET /api/clients
const getClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: clients });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create a client
// @route   POST /api/clients
const createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json({ success: true, data: client });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Update a client
// @route   PUT /api/clients/:id
const updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!client) {
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        res.status(200).json({ success: true, data: client });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Delete a client
// @route   DELETE /api/clients/:id
const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    getClients,
    createClient,
    updateClient,
    deleteClient,
};
