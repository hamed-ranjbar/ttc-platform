const mongoose = require('mongoose');

const materialTypeSchema = new mongoose.Schema({
    type_name:String
});
const materialSchema = new mongoose.Schema({
    material_no:Number,
    MaterialType:materialTypeSchema,
    material_link:String,
    mandatory:Boolean,
    max_point:Number
});
const courseSchema = new mongoose.Schema({
    name:String,
    commitment:{},
    description:String,
    min_grade:Number,
    active:Boolean,
    materials:[materialSchema]
});

module.exports = {
    courseSchema
}