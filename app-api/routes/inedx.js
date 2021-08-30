const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user');
const ctrlprogram = require('../controllers/program');

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
    .get(ctrlprogram.programList)
    .post(ctrlprogram.programCreateOne);

router
    .route('/program/:programid')
    .get(ctrlprogram.programReadOne)
    .put(ctrlprogram.programUpdateOne)
    .delete(ctrlprogram.programDeleteOne)

module.exports = router;