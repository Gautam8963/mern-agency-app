const Contact = require('../models/Contact');

// @desc    Create a contact submission
// @route   POST /api/contacts
const createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({ success: true, data: contact });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Get all contact submissions
// @route   GET /api/contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createContact,
    getContacts,
};
