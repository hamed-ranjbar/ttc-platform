const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['RS256']
});

const ctrlProgram = require('../controllers/Program');
const ctrlCourse = require('../controllers/Course');
const ctrlInstructor = require('../controllers/Instructor');
const ctrlInstitution = require('../controllers/Institution');
const ctrlAuth = require('../controllers/authentication')

// programs
router
    .route('/programs')
    .get(ctrlProgram.programList)
    .post(auth, ctrlProgram.programCreateOne);

router
    .route('/program/:programid')
    .get(ctrlProgram.programReadOne)
    .put(auth, ctrlProgram.programUpdateOne)
    .delete(auth, ctrlProgram.programDeleteOne);

// Courses
router
    .route('/program/:programid/courses')
    .get(ctrlCourse.courseList)
    .post(auth, ctrlCourse.courseCreateOne);

router
    .route('/program/:programid/course/:courseid')
    .get(ctrlCourse.courseReadOne)
    .put(auth, ctrlCourse.courseUpateOne)
    .delete(auth, ctrlCourse.courseDeleteOne);

// Materials
router
    .route('/program/:programid/course/:courseid/materials')
    .get(ctrlCourse.materialList)
    .post(auth, ctrlCourse.materialCreateOne);

router
    .route('/program/:programid/course/:courseid/material/:materialid')
    .get(ctrlCourse.materialReadOne)
    .put(auth, ctrlCourse.materialUpdateOne)
    .delete(auth, ctrlCourse.materialDeleteOne);

// Instructors
router
    .route('/instructors')
    .get(ctrlInstructor.instructorList)
    .post(auth, ctrlInstructor.instructorCreateOne);

router
    .route('/instructor/:instructorid')
    .get(ctrlInstructor.instructorReadOne)
    .put(auth, ctrlInstructor.instructorUpdateOne)
    .delete(auth, ctrlInstructor.instructorDeleteOne);

// Institutions
router
    .route('/institutions')
    .get(ctrlInstitution.institutionList)
    .post(auth, ctrlInstitution.institutionCreateOne);

router
    .route('/institution/:institutionid')
    .get(ctrlInstitution.institutionReadOne)
    .put(auth, ctrlInstitution.institutionUpdateOne)
    .delete(auth, ctrlInstitution.institutionDeleteOne);


// authentication
router.post('/login', ctrlAuth.login);
router.post('/signUp', ctrlAuth.signUp);

module.exports = router;