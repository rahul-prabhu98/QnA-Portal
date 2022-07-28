'use strict';

const tagModel = require('./../model/tag');

/**
 * require Mongoose object
 */
const mongoose = require('mongoose');

/**
 * defining the database/collection for Mongoose object
 */
let tagMongoose = mongoose.model('TagModel');

/**
 *
 * @param queryParameter
 * @returns {RegExpExecArray}
 */
exports.search = function (queryParameter) {
    return tagMongoose.find(queryParameter).exec();
};

/**
 *
 * @param tagObj
 */
exports.create = function (tagObj) {
    const newEvent = new tagMongoose(tagObj);
    return newEvent.save();
};

/**
 *
 * @param tagID
 * @returns {RegExpExecArray}
 */
exports.get = function (tagID) {
    return tagMongoose.findById(tagID).exec();
};

/**
 *
 * @param tagObj
 * @returns {RegExpExecArray}
 */
exports.update = function (tagObj) {
    tagObj.dateModified = new Date();
    return tagMongoose.findOneAndUpdate({_id: tagObj._id}, tagObj).exec();
};

/**
 *
 * @param tagID
 * @returns {void | Promise<void>}
 */
exports.delete = function (tagID) {
    return tagMongoose.remove({_id: tagID});
};
