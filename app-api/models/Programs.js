const mongoose = require("mongoose");
const {
    courseSchema
} = require("./Courses");

const programSchema = new mongoose.Schema({
    name: String,
    description: String,
    active: Boolean,
    rating: {
        type: Number,
        default:0,
        min: 0,
        max: 5
    },
    image_link: String,
    video_link:String,
    lecturer_id: String,
    institution_id: String,
    courses: [courseSchema]
});

mongoose.model('Program', programSchema);