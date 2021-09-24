const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
    }
});

module.exports = mongoose.model('Profile', ProfileSchema)