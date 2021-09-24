const mongoose = require('mongoose');

const ParamSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
    },
    value: {
        type: String,
        required: [true, "Please enter the value"],
    }
});

module.exports = mongoose.model('Profile', ParamSchema)