'use strict';
const userInit = require('../model/user');
const mongoose = require('mongoose'),
User = mongoose.model('users');

exports.newUser = function (user) {
    console.log("In Logging");
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

exports.updateData = function(userName, parameter, value){
    const promise = User.findOneAndUpdate({'userName': userName}, {$set:{[parameter]: value}}, {useFindAndModify: false});
    return promise;
};

exports.updatePoints = function(userName, point){
    const promise = User.findOneAndUpdate()
}


exports.updatePoints = function (userName, points, tagName) {

    const promise = User.findOneAndUpdate(
        {'userName': userName, 'interestedTags.tagName': tagName}, {$set:{'interestedTags.tagName': 'interestedTags.tagName' + points}}
    );
    return promise;
}