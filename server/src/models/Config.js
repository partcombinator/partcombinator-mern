const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    web_online: {
        type: Boolean,
        default: false,
    },

    language: {
        type: String,
        default: "spanish",
    },

    name: {
        type: String,
        default: "default",
    }

});

module.exports = mongoose.model('Config', UserSchema)