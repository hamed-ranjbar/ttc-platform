const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    description: String,
    title: String,
    institution_id: String,
    image_link: String
});

mongoose.model('Instructor', instructorSchema)