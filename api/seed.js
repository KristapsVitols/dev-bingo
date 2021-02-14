require('dotenv').config();
const mongoose = require('mongoose');

const {initDatabase} = require('./database');
const Participant = require('./modules/participant/models/Participant');
const Shift = require('./modules/shift/models/Shift');
const ShiftSpot = require('./modules/shift/models/Shift-Spot');

const dropDatabase = async () => {
    console.log('Dropping database...');
    await mongoose.connection.db.dropDatabase();
    console.log('Database is gone!');
};

const addParticipants = async () => {
    console.log('Adding participants...');

    const docsToInsert = [
        {name: 'Kristaps'},
        {name: 'Rolands'},
        {name: 'Anrijs'},
        {name: 'Jānis'},
        {name: 'Dāvis'},
        {name: 'Iļja'},
        {name: 'Kristīne'},
        {name: 'Dmitrijs'},
        {name: 'Lauma'},
        {name: 'Kaspars'},
        {name: 'Viktor'},
        {name: 'Einārs'},
    ];

    await Participant.insertMany(docsToInsert);

    console.log('Participants added...');
};

const addShift = async () => {
    console.log('Adding shift...');

    const shift = new Shift();
    shift.name = 'April ( 19th - 23th )';

    await shift.save();

    // create spots
    const spots = [
        {
            type: 'morning',
            date: new Date('2021-04-19'),
            shift: shift._id,
        },
        {
            type: 'evening',
            date: new Date('2021-04-20'),
            shift: shift._id,
        },
        {
            type: 'morning',
            date: new Date('2021-04-21'),
            shift: shift._id,
        },
        {
            type: 'evening',
            date: new Date('2021-04-22'),
            shift: shift._id,
        },
        {
            type: 'morning',
            date: new Date('2021-04-23'),
            shift: shift._id,
        },
    ];

    await ShiftSpot.insertMany(spots);

    console.log('Shift added...');
}

const assignShifts = async () => {
    console.log('Assigning shifts...');

    let participants = await Participant.find().limit(5);
    const shift = await Shift.findOne().populate('spots');

    for (let i = 0; i < shift.spots.length; i++) {
        var participant = participants[Math.floor(Math.random() * participants.length)];
        shift.spots[i].participant = participant.id;
        participants = participants.filter(p => p.id !== participant.id);

        await shift.spots[i].save();
    }

    console.log('Shifts assigned...');
}

(async () => {
    await initDatabase();
    await dropDatabase();

    await addParticipants();
    await addShift();
    await assignShifts();

    process.exit(0);
})();