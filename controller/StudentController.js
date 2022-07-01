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


const editSingleStudent = async (req, res) => {
    let id = req.params.id;
    let data = await Student.findById(id);
    res.render('edit', { data });
}

const updateStudents = async (req, res) => {

    let old_photo = req.body.old_photo;

    let update_photo = '';
    if(req.file){
        update_photo = req.file.filename;
    }else {
        update_photo = old_photo;
    }
    
    await Student.findByIdAndUpdate(req.body.id, {
        ...req.body,
        photo: update_photo
    }, { now : true });
    res.redirect('/students');
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
    editSingleStudent,
    updateStudents,
}