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
 * Subdocument for answers
 */
let answerSubSchema = new Schema({
            userName : {
                type : String
            },
            answer: {
                type: String
            },
            upvotes : {
                type: Number
            },
            downvotes : {
                type: Number
            },
            dateCreated: {
                type: Date,
                default: Date.now()
            },
            isActive : {
                type : Boolean
            }
});

/**
 * Schema defined for Question object
 * @type {mongoose.Schema}
 */
let questionSchema = new Schema({
   questionId: { 
        type: Number
    },
    userName: {
        type: String
    },
    title: {
        type: String
    },
    description: {
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
    answers: [
        answerSubSchema
    ],
    verifiedAnswerId : {
        type :  String
    }, 
    spamCount: {
        type: Number,
        min: 0,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
    // tagCategory: {
    //     type: String,
    //     default: 'general'
    // } Currently not needed
}, {
    versionKey: false
});

questionSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

questionSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('questions', questionSchema);
