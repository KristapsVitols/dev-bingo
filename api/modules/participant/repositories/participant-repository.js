const Participant = require('../models/Participant');

exports.getParticipants = () => Participant.find();