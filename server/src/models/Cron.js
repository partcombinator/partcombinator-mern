const mongoose = require('mongoose');

const CronSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
    }
});

module.exports = mongoose.model('Cron', CronSchema)