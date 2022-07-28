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
   questionId: { 
        type: Number
    },
    userId: {
        type: Number
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
        {
            userId : {
                type : Number
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
        }
    ],   
    spamCount: {
        type: Number,
        min: 0
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

module.exports = mongoose.model('QuestionModel', questionSchema);
