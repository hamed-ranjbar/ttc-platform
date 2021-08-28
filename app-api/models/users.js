const mongoose = require('mongoose');

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
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema)