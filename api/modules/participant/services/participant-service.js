const participantRepo = require('../repositories/participant-repository');

exports.getParticipants = async () => {
    const participants = await participantRepo.getParticipants().populate({
        path: 'shifts',
        options: { sort: { date: -1 } }
    });

    return participants.sort((a, b) => b.shifts.length - a.shifts.length);
}