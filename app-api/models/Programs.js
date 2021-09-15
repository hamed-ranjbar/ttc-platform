const mongoose = require("mongoose");
const {
    courseSchema
} = require("./Courses");

const programSchema = new mongoose.Schema({
    name: String,
    description: String,
    active: Boolean,
    lecturer_id: String,
    institution_id: String,
    courses: [courseSchema]
});

mongoose.model('Program', programSchema);