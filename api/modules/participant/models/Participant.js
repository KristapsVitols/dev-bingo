const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

participantSchema.virtual('shifts', {
    ref: 'ShiftSpot',
    localField: '_id',
    foreignField: 'participant',
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;