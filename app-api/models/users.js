const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        firstname: String,
        lastname: String,
    },
    email: {
        type: String,
        required: true
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