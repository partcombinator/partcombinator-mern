const mongoose = require('mongoose');
const randtoken = require('rand-token');
const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    profile: {
        type: String,
        type: [{ type: mongoose.Types.ObjectId, ref: 'Profile' }]
    },
    verified: {
        type: Boolean,
        default: false,
      },
    creatAt: {
        type: Date,
        default: Date.now()
    },
    activation_token: {
        type: String,
        default: function() {
            return randtoken.generate(64);
        }
    },

});

module.exports = mongoose.model('User', UserSchema)