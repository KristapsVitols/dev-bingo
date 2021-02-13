const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        spots: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

const Shift = mongoose.model('Shift', shiftSchema);

module.exports = Shift;