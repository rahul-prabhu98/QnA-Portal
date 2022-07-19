'use strict';
/**
 * require Mongoose object.
 */
const mongoose = require('mongoose');

/**
 * defining the database/collection for Mongoose object.
 */
let eventMongoose = mongoose.model('eventDB');


/**
 * Returns an array of event object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (queryParameter) {
    return eventMongoose.find(queryParameter).exec();
};

/**
 * Saves and returns the new event object.
 *
 * @param {Object} eventObj {event object}
 */
exports.create = function (eventObj) {
    const newEvent = new eventMongoose(eventObj);
    return newEvent.save();
};

/**
 * Returns the event object matching the id.
 *
 * @param {string} eventID {Id of the event object}
 */
exports.get = function (eventID) {
    return eventMongoose.findById(eventID).exec();
};

/**
 * Updates and returns the event object.
 *
 * @param {Object} event {event object}
 */
exports.update = function (eventObj) {
    eventObj.requestModifyTime = new Date();
    return eventMongoose.findOneAndUpdate({_id: eventObj._id}, eventObj).exec();
};

/**
 * Deletes the event object matching the id.
 *
 * @param {string} eventID {Id of the event object}
 */
exports.delete = function (eventID) {
 return eventMongoose.remove({_id: eventID});
};
