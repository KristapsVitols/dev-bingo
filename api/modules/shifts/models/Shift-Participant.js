const mongoose = require('mongoose');

const shiftParticipantSchema = new mongoose.Schema(
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
        participant: {
            type: mongoose.Schema.ObjectId,
            ref: 'Participant',
            required: true,
        },
        shift: {
            type: mongoose.Schema.ObjectId,
            ref: 'Shift',
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

const ShiftParticipant = mongoose.model('ShiftParticipant', shiftParticipantSchema);

module.exports = ShiftParticipant;