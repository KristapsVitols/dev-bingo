const participantRepo = require('../repositories/participant-repository');

exports.getParticipants = async () => participantRepo.getParticipants().populate('shifts');