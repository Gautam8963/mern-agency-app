const Subscriber = require('../models/Subscriber');

// @desc    Add a subscriber
// @route   POST /api/subscribers
const createSubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        // Check if email already exists
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ success: false, message: 'Email already subscribed' });
        }

        const subscriber = await Subscriber.create({ email });
        res.status(201).json({ success: true, data: subscriber });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Get all subscribers
// @route   GET /api/subscribers
const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: subscribers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createSubscriber,
    getSubscribers,
};
