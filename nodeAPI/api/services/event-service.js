
const mongoose = require('mongoose');
let eventMongoose = mongoose.model('eventDB');



exports.search = function (queryParameter) {
    const promiseObj = eventMongoose.find(queryParameter).exec();
    return promiseObj;
};


exports.create = function (eventObj) {
    const newEvent = new eventMongoose(eventObj);
    let promiseObj = newEvent.save();
    return promiseObj;
};
