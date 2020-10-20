const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dob: Number
});

module.exports = mongoose.model('userModel' , userSchema);

