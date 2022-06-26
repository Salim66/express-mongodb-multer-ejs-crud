const express = require('express');
const { getAllStudents, createStudents } = require('../controller/StudentController');
const router = express.Router();


router.get('/', getAllStudents);
router.get('/create', createStudents);


// Export router
module.exports = router;