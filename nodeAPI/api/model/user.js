'use strict';
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let userSchema =new Schema({

    firstName:{
        type: String,
        required: "First Name cannot be empty",
        trim: true
    },

    lastName:{
        type: String,
        required: "Last Name cannot be empty",
        trim: true
    },

    phoneNo:{
        type: String,
        required: "Last Name cannot be empty",
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    },

    collegeName:{
        type: String
    },

    degree:{
        type: String
    },

    course:{
        type: String
    },

    graduationYear:{
        type: Date
    },

    interestedTags:[{
        type: String
    }],

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
        type: Boolean,
        default: true
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
    },

    points: {
        type: Number,
        default: 10
    }

}, {
    versionKey: false
});


module.exports = mongoose.model('users', userSchema);