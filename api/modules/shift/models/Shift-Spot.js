const mongoose = require('mongoose');

const shiftSpotSchema = new mongoose.Schema(
    {
        // morning / evening
        type: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        shift: {
            type: mongoose.Schema.ObjectId,
            ref: 'Shift',
            required: true,
        },
        participant: {
            type: mongoose.Schema.ObjectId,
            ref: 'Participant',
        },
    },
    {
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

const ShiftSpot = mongoose.model('ShiftSpot', shiftSpotSchema);

module.exports = ShiftSpot;