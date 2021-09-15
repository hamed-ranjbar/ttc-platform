const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
    name: String,
    description: String,
    coords:{
        type: {type: String},
        coordinates: [Number]
    },
    image_link: String
});

mongoose.model('Institution', institutionSchema);