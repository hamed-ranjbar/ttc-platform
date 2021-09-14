const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: {
        first_name: String,
        last_name: String
    },
    title: String,
    institution_id: String,
    image_link: String
});

mongoose.model('Instructor', instructorSchema)