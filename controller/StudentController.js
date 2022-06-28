
/**
 * 
 * @desc get all student data
 * @name Get /students/
 * @access public
 */
const getAllStudents = (req, res) => {
    res.render('index');
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


const showSingleStudent = (req, res) => {
    res.render('show');
}


module.exports = {
    getAllStudents,
    createStudents,
    showSingleStudent
}