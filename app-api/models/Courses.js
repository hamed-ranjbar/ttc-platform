const mongoose = require('mongoose');

const materialTypeSchema = new mongoose.Schema({
    type_name:String
});
const materialSchema = new mongoose.Schema({
    number:Number,
    Type:materialTypeSchema,
    link:String,
    mandatory:Boolean,
    max_point:Number
});
const courseSchema = new mongoose.Schema({
    name:String,
    commitment:Number,
    description:String,
    min_grade:Number,
    active:{
        type:Boolean,
        'default': false
    },
    materials:[materialSchema]
});

module.exports = {
    courseSchema
}