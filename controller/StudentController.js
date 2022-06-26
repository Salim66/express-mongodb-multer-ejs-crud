
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

module.exports = {
    getAllStudents,
    createStudents
}