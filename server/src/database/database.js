const mongoose = require('mongoose');

console.log(process.env.DB_LIK)

mongoose.connect(process.env.DB_LIK,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db=>console.log('DB is connected'))
    .catch(err => console.error(err));