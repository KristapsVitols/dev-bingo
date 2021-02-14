require('dotenv').config();
const ShiftSpot = require('../models/Shift-Spot');
const Shift = require('../models/Shift');
const moment = require('moment');
const {initDatabase} = require('../../../database');
const shiftRepo = require('../repositories/shift-repository');
const participantRepo = require('../../participant/repositories/participant-repository');

(async () => await initDatabase())();

// Days
const DAYS = {
    1: 1,
    2: 0.5,
    3: 0.5,
    4: 0.5,
    5: 1,
}

// Shift types
const TYPES = {
    morning: 0.5,
    evening: 1,
}

const assignShifts = async () => {
    // 1. Get all participants
    const participants = await participantRepo.getParticipants().lean().populate('shifts');

    // 2. Calculate current scores
    participants.forEach(participant => {
        participant.score = 0;
        participant.shifts.forEach(shift => {
            participant.score += TYPES[shift.type];
            participant.score += DAYS[moment(shift.date).isoWeekday()];
        });
    });

    // 3. Get first 5 with lowest score
    let qualifiedParticipants = participants.sort((a, b) => a.score - b.score).slice(0, 5);

    // 4. Get latest shift
    const shift = await Shift.findOne().sort({_id: -1}).populate('spots');

    // 5. Shuffle the spots array to make it more rng
    for (let i = shift.spots.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shift.spots[i];
        shift.spots[i] = shift.spots[j];
        shift.spots[j] = temp;
    }

    // 6. Assign shift spots
    for (let i = 0; i < shift.spots.length; i++) {
        const participant = qualifiedParticipants[Math.floor(Math.random() * qualifiedParticipants.length)];
        shift.spots[i].participant = participant._id;
        qualifiedParticipants = qualifiedParticipants.filter(p => p._id !== participant._id);

        await shift.spots[i].save();
    }
}

assignShifts();