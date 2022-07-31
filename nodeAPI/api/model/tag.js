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
 * Schema defined for Tag object
 * @type {mongoose.Schema}
 */
let tagSchema = new Schema({
    tagName: {
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
    isActive: {
        type: Boolean,
        default: true
    },
    tagCategory: {
        type: String,
        default: 'general'
    }
}, {
        versionKey: false
});

tagSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

tagSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('tagDB', tagSchema);
