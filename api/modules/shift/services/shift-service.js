const shiftRepo = require('../repositories/shift-repository');

exports.getShifts = async () => shiftRepo.getShifts().populate({
    path: 'spots',
    populate: {
        path: 'participant'
    }
});