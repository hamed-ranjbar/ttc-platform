const mongoose = require('mongoose');
const Usr = mongoose.model('User');

const userList = (req, res) => {
    Usr.find()
        .exec((err, users) => {
            if (!users.length) {
                res
                    .status(404)
                    .json({
                        'error': 'User not Found!'
                    });
            } else if (err) {
                res
                    .status(503)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(users);
            }
        });
}

const userCreate = (req, res) => {
    res
        .status(200)
        .json({
            status: 'success'
        });
}

const userReadOne = (req, res) => {
    res
        .status(404)
        .json({
            'status': 'Success',
            'id': req.params.userid
        });
}

const userUpdateOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'Success',
            'id': req.params.userid
        });
}

const userDeleteOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'Success',
            'id': req.params.userid
        });
}

module.exports = {
    userList,
    userCreate,
    userReadOne,
    userUpdateOne,
    userDeleteOne
}