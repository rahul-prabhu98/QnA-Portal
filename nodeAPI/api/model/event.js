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
let eventSchema = new Schema({

    questionId: {
        type: String
    },
    organizer: {
        type: String
    },
    attendees: [String],
    requestCreationTime: {
        type: Date
    },
    requestModifyTime: {
        type: Date
    },
    icsFile : {
        data: Buffer,
        contentType: String
    },
    location: {
        type: String
    },
    title: {
        type:String,
        required: "Title is Required"
    },
    description: {
        type: String
    },
    requestStatus: {
        type: String,
        enum: ['initiated', 'seen','audit','accepted','denied'],
        required: "requestStatus is Required of type ENUM"
    },
    isActive: {
        type: Boolean
    }
}, {
    versionKey: false
});

eventSchema.virtual('id').get(function(){
    return this._id.toHexString();
});


eventSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('eventDB', eventSchema);
