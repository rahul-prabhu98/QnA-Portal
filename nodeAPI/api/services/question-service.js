'use strict';

const questionModel = require('./../model/question');

/**
 * require Mongoose object
 */
const mongoose = require('mongoose');

/**
 * defining the database/collection for Mongoose object
 */
let questionMongoose = mongoose.model('questions');

/**
 *
 * @param queryParameter
 * @returns {RegExpExecArray}
 */
exports.search = function (queryParameter) {
    return questionMongoose.find(queryParameter).exec();
};

/**
 *
 * @param questionObj
 */
exports.create = function (questionObj) {
    const newQuestion = new questionMongoose(questionObj);
    return newQuestion.save();
};

/**
 *
 * @param questionId
 * @returns {RegExpExecArray}
 */
exports.get = function (questionId) {
    return questionMongoose.findById(questionId).exec();
};

/**
 *
 * @param questionObj
 * @returns {RegExpExecArray}
 */
exports.update = function (questionObj) {
    questionObj.dateModified = new Date();
    return questionMongoose.findOneAndUpdate({_id: questionObj._id}, questionObj).exec();
};

/**
 *
 * @param questionID
 * @returns {void | Promise<void>}
 */
exports.delete = function (questionID) {
    return questionMongoose.remove({_id: questionID});
};
