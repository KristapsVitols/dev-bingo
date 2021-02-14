const participantRepo = require('../repositories/participant-repository');

exports.getParticipants = async () => participantRepo.getParticipants().populate({
    path: 'shifts',
    options: { sort: { date: -1 } }
});