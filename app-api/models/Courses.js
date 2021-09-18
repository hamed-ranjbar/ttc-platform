const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name:String,
    number: Number,
    Type: String,
    link: String,
    mandatory: Boolean,
    max_point: Number
});
const courseSchema = new mongoose.Schema({
    name: String,
    commitment: Number,
    description: String,
    min_grade: Number,
    number: Number,
    active: {
        type: Boolean,
        'default': false
    },
    materials: [materialSchema]
});

courseSchema.index({ number: 1 })
module.exports = {
    courseSchema
}