const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
    name:String,
    description:String,
    active:Boolean,
    lecturer_id:String,
    institution_id:String
})
mongoose.model('program', programSchema);