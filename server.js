// require necessary feature
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');
const { application } = require('express');


// Environment port get
const PORT = process.env.SERVER_P0RT || 5000;

// Ejs Setup
app.set("view engine", 'ejs');

// Express js static folder 
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// Routes
app.use('/students', require('./routes/StudentRoutes'));

// Server Listen
app.listen(PORT, () => console.log(`Server is running port is ${PORT}`.bgGreen.black));
