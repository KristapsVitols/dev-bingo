require('dotenv').config();
const mongoose = require('mongoose');

const {initDatabase} = require('./database');
const Participant = require('./modules/participant/models/Participant');

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

(async () => {
    await initDatabase();
    await dropDatabase();

    await addParticipants();

    process.exit(0);
})();