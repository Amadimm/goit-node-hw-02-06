const mongoose = require('mongoose')

const { Schema, model } = mongoose

const users = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'E-mail is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
     avatarUrl: {
        type: String,
    },
    token: {
        type: String,
        default: null,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
    }
}, {versionKey: false})

const Users = model('users', users)

module.exports = Users