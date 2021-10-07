const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    name: String,
    number: Number,
    Type: String,
    vid_link: String,
    text:String,
    mandatory: Boolean,
    max_point: Number
});

module.exports = {
    materialSchema
}