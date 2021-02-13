const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema(
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

shiftSchema.virtual('spots', {
    ref: 'ShiftSpot',
    localField: '_id',
    foreignField: 'shift',
});

const Shift = mongoose.model('Shift', shiftSchema);

module.exports = Shift;