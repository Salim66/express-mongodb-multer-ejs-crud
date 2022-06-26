// require necessary feature
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');


// Environment port get
const PORT = process.env.SERVER_P0RT || 5000;

// Ejs Setup

// Express js static folder 
app.use(express.static(path.join(__dirname, '/public')));

// Routes


// Server Listen
app.listen(PORT, () => console.log(`Server is running port is ${PORT}`));
