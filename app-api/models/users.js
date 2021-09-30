const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        'default': ''
    },
    salt: {
        type: String,
        'default': ''
    }
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    console.log(`_id: ${this._id}\nsalt: ${this.salt}\nhash: ${this.hash}`);
};

userSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        exp: parseInt(expiry.getTime() / 1000, 10)
    }, process.env.JWT_SECRET)
};

mongoose.model('User', userSchema);