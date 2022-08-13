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
 * @returns promise
 */
exports.get = function (questionId) {
    const getPromise = questionMongoose.findById(questionId).exec();
    console.log(getPromise);
    return getPromise;
};

/**
 *
 * @param userName
 * @returns promise
 */
exports.getById = function (userName) {
    console.log(userName);
    const getPromise = questionMongoose.find({userName: userName}).exec();
    console.log(getPromise);
    return getPromise;
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

exports.insertAnswer = function (questionId, answerObj) {    
    // const targetQuestion = questionMongoose.findOne({ _id: question._id});
    questionMongoose.update(
        { _id: questionId},
        { $push: {answers: answerObj} }
    ).exec();
    //  targetQuestion.answers.push({answerObj});
    //  targetQuestion.save(function (err, answerObj){
    //      if(err) return err;
    //      return answerObj;
    //  } );
    return answerObj;
}

/**
 *
 * @param questionID
 * @returns {void | Promise<void>}
 */
exports.delete = function (questionID) {
    return questionMongoose.remove({_id: questionID});
};
