'use strict';
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let userSchema =new Schema({
    userName: {
        type: String,
        required: "User Name cannot be empty",
        unique: "Username already exist",
        trim: true
    },

    password: {
        type: String,
        required: "Password cannot be empty",
        trim: true
    },

    userStatus: {
        type: String,
        enum: ["Active", "Suspend", "Deactivate", "Purged"],
        default: "Active"
    },

    email: {
       type: String,
       required: "Email address cannot be empty",
       unique: true,
       trim: true,
       match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },

    lastLoginDate: {
        type: Date,
        default: Date.now
    },

    profilePicture: {
        type: String,
        default: "profilePicture/user.jpg"
    },

    updatedDate: {
        type: Date,
        default: Date.now
    },

    createdDate: {
        type: Date
    }
}, {
    versionKey: false
});


module.exports = mongoose.model('user', userSchema);