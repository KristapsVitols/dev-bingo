const shiftRepo = require('../repositories/shift-repository');

exports.getLatestShift = async () => shiftRepo.getLatestShift().populate({
    path: 'spots',
    populate: {
        path: 'participant'
    }
});