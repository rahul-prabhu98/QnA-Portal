'use strict';
/**
 * require mongoose object
 */
const userInit = require('../model/user');
const mongoose = require('mongoose'),
User = mongoose.model('users');

/**
 * service for saving new user
 *
 * @param user
 * @returns {Promise|void|ICalCalendar|*}
 */
exports.newUser = function (user) {
    console.log("In Logging");
    const newUser = new User(user);
    const promise = newUser.save();
    return  promise;
};

/**
 * service for checking the existing user
 *
 * @param email
 * @param userName
 * @returns {Promise}
 */
exports.userExist = function(email, userName){
    const promise = User.find({ $or: [{'email': email}, {'userName': userName}] }).exec();
    return promise;
};

/**
 * fetching the user details data
 *
 * @param parameter
 * @param value
 * @returns {Query|void|number|bigint|any}
 */
exports.fetchData = function(parameter, value){
  const promise = User.find({[parameter]: value});
  return promise;
};

/**
 * update the given user details
 *
 * @param userName
 * @param parameter
 * @param value
 * @returns {void|Query}
 */
exports.updateData = function(userName, parameter, value){
    const promise = User.findOneAndUpdate({'userName': userName}, {$set:{[parameter]: value}}, {useFindAndModify: false});
    return promise;
};
