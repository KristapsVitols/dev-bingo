// IMPORTS
const express = require('express');
const helmet = require('helmet');
const app = express();

// LOAD ENV VARIABLES
require('dotenv').config();

// MODULES
const {initDatabase} = require('./database');
require('./modules/shift/models/Shift-Spot');

// ROUTES
const participantRoutes = require('./modules/participant/routes/participant-routes');
const shiftRoutes = require('./modules/shift/routes/shift-routes');

// INIT DATABASE
(async () => await initDatabase())();

// INIT MIDDLEWARE
app.use(helmet());
app.use(express.json());

// INIT ROUTES
app.use('/api/participants', participantRoutes);
app.use('/api/shifts', shiftRoutes);

// INIT SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API server up on ${PORT}`));