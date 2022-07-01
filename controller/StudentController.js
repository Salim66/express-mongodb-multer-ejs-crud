const Student = require("../model/StudentModel");

/**
 * 
 * @desc get all student data
 * @name Get /students/
 * @access public
 */
const getAllStudents = async (req, res) => {
    let all_data = await Student.find();
    res.render('index', { all_data });
}

/**
 * 
 * @desc get all student data
 * @name Get /students/
 * @access public
 */
const createStudents = (req, res) => {
    res.render('create');
}


/**
 * 
 * @desc store student data
 * @name POST /students/
 * @access public
 */
const storeStudent = async (req, res) => {
    // Create Student Data
    await Student.create({
        ...req.body,
        photo: req.file.filename
    });

    // Redirect to All Student List
    res.redirect('/students');
}




const showSingleStudent = async (req, res) => {
    let id = req.params.id;
    let data = await Student.findById(id);
    res.render('show', { data });
}


const deleteSingleStudent = async (req, res) => {
    let id = req.params.id;
    let data = await Student.findByIdAndDelete(id);
    res.redirect('/students');
}


module.exports = {
    getAllStudents,
    createStudents,
    showSingleStudent,
    storeStudent,
    deleteSingleStudent,
}