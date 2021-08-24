const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        firstname: String,
        lastname: String,
        required: true
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