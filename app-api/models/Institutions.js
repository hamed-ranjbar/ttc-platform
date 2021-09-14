const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: Geolocation,
    image_link: String
});

mongoose.model('Institution', institutionSchema);