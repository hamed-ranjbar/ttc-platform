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
const ctrlChapter = require('../controllers/Chapter');
const ctrlMaterial = require('../controllers/Materials');
const ctrlInstructor = require('../controllers/Instructor');
const ctrlInstitution = require('../controllers/Institution');
const ctrlAuth = require('../controllers/authentication');

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
    .get(auth, ctrlCourse.courseReadOne)
    .put(auth, ctrlCourse.courseUpateOne)
    .delete(auth, ctrlCourse.courseDeleteOne);

// Chapters
router
    .route('/program/:programid/course/:courseid/chapters')
    .get(ctrlChapter.chapterList)
    .post(auth, ctrlChapter.chapterCreateOne);

router
    .route('/program/:programid/course/:courseid/chapter/:chapterid')
    .get(auth, ctrlChapter.chapterReadOne)
    .put(auth, ctrlChapter.chapterUpdateOne)
    .delete(auth, ctrlChapter.chapterDeleteOne);

// Materials
router
    .route('/program/:programid/course/:courseid/chapter/:chapterid/materials')
    .get(auth, ctrlMaterial.materialList)
    .post(auth, ctrlMaterial.materialCreateOne);

router
    .route('/program/:programid/course/:courseid/chapter/:chapterid/material/:materialid')
    .get(auth, ctrlMaterial.materialReadOne)
    .put(auth, ctrlMaterial.materialUpdateOne)
    .delete(auth, ctrlMaterial.materialDeleteOne);

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