const mongoose = require('mongoose');

const SequenceSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
    }
});

module.exports = mongoose.model('Sequence', SequenceSchema)