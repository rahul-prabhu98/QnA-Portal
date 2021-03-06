'use strict';
const userInit = require('../model/user');
const mongoose = require('mongoose'),
User = mongoose.model('user');

exports.newUser = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return  promise;
};

exports.userExist = function(email, userName){
    const promise = User.find({ $or: [{'email': email}, {'userName': userName}] }).exec();
    return promise;
};

exports.fetchData = function(parameter, value){
  const promise = User.find({[parameter]: value});
  return promise;
};