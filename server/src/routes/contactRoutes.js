const express = require('express');
const router = express.Router();
const {
    createContact,
    getContacts,
} = require('../controllers/contactController');

// Public can create, Admin can list
router.route('/').post(createContact).get(getContacts);

module.exports = router;
