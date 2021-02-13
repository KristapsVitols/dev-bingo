// IMPORTS
const express = require('express');
const helmet = require('helmet');
const app = express();

// LOAD ENV VARIABLES
require('dotenv').config();

// MODULES
const {initDatabase} = require('./database');

// INIT DATABASE
(async () => await initDatabase())();

// INIT MIDDLEWARE
app.use(helmet());
app.use(express.json());

// INIT ROUTES
//app.use('/api/auth', loginRoutes);


// INIT SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API server up on ${PORT}`));