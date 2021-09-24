const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
    }
});

module.exports = mongoose.model('Category', CategorySchema)