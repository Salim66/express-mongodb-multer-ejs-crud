const mongoose = require('mongoose');


// create database schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        trim: true,
        unique: true
    },
    cell: {
        type: String,
        required: [true, 'Cell field is required'],
        trim: true,
        unique: true
    },
    photo: {
        type: String,
        default: 'avatar.png'
    }
});


// Export student database schema
module.exports = mongoose.model('Student', studentSchema);