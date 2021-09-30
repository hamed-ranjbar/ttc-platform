const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const signUp = (req, res) => {
    if (!req.body.email | !req.body.password)
        return res
            .status(400)
            .json({ message: 'All fields are required!' });
    const user = new User();
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save((err) => {
        if (err)
            return res
                .status(500)
                .json(err);
        const token = user.generateJwt();
        console.log(user);
        res
            .status(201)
            .json({ token });
    })
};

const login = (req, res, next) => {
    if (!req.body.email | !req.body.password)
        return res
            .status(400)
            .json({ message: 'All fields are required!' });
    passport.authenticate('local', (err, user, info) => {
        let token;
        if (err)
            return res
                .status(404)
                .json(err)
        if (user) {
            token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        } else {
            res
                .status(404)
                .json(info)
        }
    })(req,res,next);
}

module.exports = {
    signUp,
    login
}