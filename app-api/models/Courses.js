const mongoose = require('mongoose');
const { chapterSchema } = require('./Chapters');

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
    chapters: [chapterSchema]
});

courseSchema.index({ number: 1 })
module.exports = {
    courseSchema
}