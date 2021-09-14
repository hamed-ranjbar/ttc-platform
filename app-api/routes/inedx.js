const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/User');
const ctrlProgram = require('../controllers/Program');
const ctrlCourse = require('../controllers/Course');
const ctrlInstructor = require('../controllers/Instructor');
const ctrlInstitution = require('../controllers/Institution');

// User
router
    .route('/users')
    .get(ctrlUser.userList)
    .post(ctrlUser.userCreate);
router
    .route('/user/:userid')
    .get(ctrlUser.userReadOne)
    .put(ctrlUser.userUpdateOne)
    .delete(ctrlUser.userDeleteOne);

// programs
router
    .route('/programs')
    .get(ctrlProgram.programList)
    .post(ctrlProgram.programCreateOne);

router
    .route('/program/:programid')
    .get(ctrlProgram.programReadOne)
    .put(ctrlProgram.programUpdateOne)
    .delete(ctrlProgram.programDeleteOne);

// Courses
router
    .route('/program/:programid/courses')
    .get(ctrlCourse.courseList)
    .post(ctrlCourse.courseCreateOne);

router
    .route('/program/:programid/course/:courseid')
    .get(ctrlCourse.courseReadOne)
    .put(ctrlCourse.courseUpateOne)
    .delete(ctrlCourse.courseDeleteOne);

// Materials
router
    .route('/program/:programid/course/:courseid/materials')
    .get(ctrlCourse.materialList)
    .post(ctrlCourse.materialCreateOne);

router
    .route('/program/:programid/course/:courseid/material/:materialid')
    .get(ctrlCourse.materialReadOne)
    .put(ctrlCourse.materialUpdateOne)
    .delete(ctrlCourse.materialDeleteOne);

// Instructors
router
    .route('/instructors')
    .get(ctrlInstructor.instructorList)
    .post(ctrlInstructor.instructorCreateOne);

router
    .route('/instructor/:instructorid')
    .get(ctrlInstructor.instructorReadOne)
    .put(ctrlInstructor.instructorUpdateOne)
    .delete(ctrlInstructor.instructorDeleteOne);

// Institutions
router
    .route('institutions')
    .get(ctrlInstitution.institutionList)
    .post(ctrlInstitution.institutionCreateOne);

router
    .route('institution/:institutionid')
    .get(ctrlInstitution.institutionReadOne)
    .put(ctrlInstitution.institutionUpdateOne)
    .delete(ctrlInstitution.institutionDeleteOne);

module.exports = router;