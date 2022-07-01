const express = require('express');
const { getAllStudents, createStudents, showSingleStudent, storeStudent, deleteSingleStudent } = require('../controller/StudentController');
const router = express.Router();
const multer = require('multer');
const path = require('path');


// create multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../assets/upload/'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

// create multer middleware
const studentMulter = multer({
    storage: storage
}).single('photo');


router.get('/', getAllStudents);
router.post('/', studentMulter, storeStudent);
router.get('/create', createStudents);
router.get('/:id', showSingleStudent);
router.get('/delete/:id', deleteSingleStudent);


// Export router
module.exports = router;