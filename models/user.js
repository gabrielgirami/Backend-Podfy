const mongoose = require('../database');

const User5chema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
    type: String,
    required: true,
    select: false,
    },
createdAt: {
    type: Date,
    default: Date, now,
   },
});

const User = mongoose.Model('User',User5chema);
module.exports = User;