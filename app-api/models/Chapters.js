const mongoose = require('mongoose');
const { materialSchema } = require('./Materials');

const chapterSchema = new mongoose.Schema({
    name:String,
    description:String,
    number:Number,
    material: [materialSchema]
});

module.exports = {
    chapterSchema
}