// require necessary feature
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');
const { application } = require('express');
const expressLayout = require('express-ejs-layouts');


// Environment port get
const PORT = process.env.SERVER_P0RT || 5000;

// Ejs Setup
app.set("view engine", 'ejs');
app.set('layout', './layouts/app')
app.use(expressLayout);

// Express js static folder 
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// Routes
app.use('/students', require('./routes/StudentRoutes'));

// Server Listen
app.listen(PORT, () => console.log(`Server is running port is ${PORT}`.bgGreen.black));
