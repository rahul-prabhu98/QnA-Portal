'use strict';
const userPath = require('../model/user');
const mongoose = require('mongoose'),
User = mongoose.model('user');

exports.newUser = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return  promise;
}