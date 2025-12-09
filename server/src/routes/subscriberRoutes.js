const express = require('express');
const router = express.Router();
const {
    createSubscriber,
    getSubscribers,
} = require('../controllers/subscriberController');

// Public can subscribe, Admin can list
router.route('/').post(createSubscriber).get(getSubscribers);

module.exports = router;
