const express = require('express');
const { getAllStudents, createStudents, showSingleStudent } = require('../controller/StudentController');
const router = express.Router();


router.get('/', getAllStudents);
router.get('/create', createStudents);
router.get('/:id', showSingleStudent);


// Export router
module.exports = router;