'use strict';
const eventRequestModel = require('./../model/event-request');
/**
 * require Mongoose object.
 */
const mongoose = require('mongoose');

/**
 * defining the database/collection for Mongoose object.
 */
let eventRequestMongoose = mongoose.model('eventRequestDB');

/**
 * Saves and returns the new event Request object.
 *
 * @param {Object} eventRequestObj {event object}
 */
exports.create = function (eventRequestObj) {
    const newEventRequest = new eventRequestMongoose(eventRequestObj);
    return newEventRequest.save();
};

// -------------------------------------------------------------------------------------------------------------------

/**
 * Returns an array of event object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (queryParameter) {
    return eventMongoose.find(queryParameter).exec();
};



/**
 * Returns the event object matching the id.
 *
 * @param {string} eventRequestID {Id of the event object}
 */
exports.get = function (eventRequestID) {
    return eventMongoose.findById(eventRequestID).exec();
};

/**
 * Updates and returns the event object.
 *
 * @param {Object} event {event object}
 */
exports.update = function (eventRequestObj) {
    eventRequestObj.requestModifyTime = new Date();
    return eventMongoose.findOneAndUpdate({_id: eventRequestObj._id}, eventRequestObj).exec();
};

/**
 * Deletes the event object matching the id.
 *
 * @param {string} eventRequestID {Id of the event object}
 */
exports.delete = function (eventRequestID) {
    return eventMongoose.remove({_id: eventRequestID});
};
