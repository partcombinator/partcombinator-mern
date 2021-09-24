const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title"],
    },
    text: {
        type: String,
        required: [true, "Please enter the text"],
    },
    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('Post', PostSchema)