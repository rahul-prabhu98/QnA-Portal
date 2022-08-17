'use strict';
/**
 * require Mongoose object.
 */
const mongoose = require('mongoose');
/**
 * Mongoose schema object
 */
const Schema = mongoose.Schema;

/**
 * Mongoose schema for event object.
 */
let eventRequestSchema = new Schema({

    title: {
        type:String,
        required: "Title is Required"
    },
    description: {
        type:String
    },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
        required: "date cannot be empty",
    },
    time: {
        type: String
    },
    hours: {
        type: Number
    },
    organizer: {
        type: String,
        required: "Organizer userName cannot be empty",
        trim: true
    },
    attendees: {
        type: String,
        required: "attendees userName cannot be empty",
        trim: true
    },
    requestCreationTime: {
        type: Date,
        default: Date.now
    },
    requestModifyTime: {
        type: Date,
        default: Date.now
    },
   requestStatus: {
        type: String,
       default: "INITIATED"
    },
    requestStatusReason: {
        type: String
    },
    icsFile : {
        data: Buffer,
        contentType: String
    },
    questionID:{
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});

eventRequestSchema.virtual('id').get(function(){
    return this._id.toHexString();
});


eventRequestSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('eventRequestDB', eventRequestSchema);
