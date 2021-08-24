const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user');

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

module.exports = router;