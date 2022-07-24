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
 * Schema defined for Question object
 * @type {mongoose.Schema}
 */
let questionSchema = new Schema({
    questionID: {
        type: String
    },
    userName: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    dateModified: {
        type: Date,
        default: Date.now()
    },
    tags: [{
        type: String
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    spamCount: {
        type: Number,
        min: 0
    },
    tagCategory: {
        type: String,
        default: 'general'
    }
}, {
    versionKey: false
});

questionSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

questionSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('questionDB', questionSchema);
