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
    let user = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        email: req.body.email,
        sex: req.body.sex,
        password: req.body.password
    }
    Usr.create(user, (err, response) => {
        if (err) {
            res
                .status(500)
                .json(err.message);
        } else {
            res
                .status(200)
                .json(response);
        }
    })
}

const userReadOne = (req, res) => {
    Usr
        .findById(req.params.userid)
        .exec((err, user) => {
            if (err) {
                res
                    .status(404)
                    .json(err)
            } else {
                res
                    .status(200)
                    .json(user);
            }
        });
}

const userUpdateOne = (req, res) => {
    Usr
        .findById(req.params.userid)
        .exec((err, user) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            } else {
                user.name = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                };
                user.password= req.body.password;
                user.sex = req.body.sex;
            }
        });
}

const userDeleteOne = (req, res) => {
    Usr.findByIdAndDelete(req.params.userid, (err, user) => {
        if (err) {
            res
                .status(404)
                .json(err)
        } else {
            res
                .status(200)
                .json(user)
        }
    })
}

module.exports = {
    userList,
    userCreate,
    userReadOne,
    userUpdateOne,
    userDeleteOne
}