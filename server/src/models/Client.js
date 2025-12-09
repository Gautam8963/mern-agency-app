const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String, // Testimonial
        required: true,
    },
    designation: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Client', clientSchema);
