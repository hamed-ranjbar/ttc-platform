const mongoose = require("mongoose");

const partSchema = new mongoose.Schema({
    name: String,
    description: String,
})

const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    parts: [partSchema]
})

const programSchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    vidURL: String,
    courses: [courseSchema]
})

mongoose.model('program', programSchema);