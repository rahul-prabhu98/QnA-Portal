
'use strict';

/**
 * importing the objects of user model, service, tag model, jwtToken
 */

const userService = require('../services/user-services');
const User = require('../model/user');
const Tag = require('../model/tag')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * signup function for user registration, takes the username and password
 * stores the hashed password
 *
 * @param req
 * @param res
 */
exports.signup = function (req, res) {
    //const newUser = Object.assign({}, req.body);  --Commented and reimplemented below for proper structuring of Data
    userService.fetchData('userName', req.body.userName).then(
        (user) => {

            if(user.length >= 1){
                return res.status(409).json({
                    statusCode: '409',
                    message: 'Username already exist',
                    data: []
                });
            }
            else {
                userService.fetchData('email', req.body.email).then(
                    (user) => {
                        if(user.length >= 1){
                            return res.status(409).json({
                                statusCode: '409',
                                message: 'Email already exist',
                                data: []
                            });
                        } else {
                            bcrypt.hash(req.body.password, 10, (err, hash) => {
                                if (err) {
                                    return res.status(500).json({
                                        statusCode: '409',
                                        message: 'Internal Server Error occured',
                                        data: []
                                    });
                                }
                                else {
                                    console.log(req.body.password);
                                    const newUser = new User({
                                        //_id: new mongoose.Types.ObjectId,
                                        firstName: req.body.firstName,
                                        lastName: req.body.lastName,
                                        phoneNo: req.body.phoneNo,
                                        collegeName: req.body.collegeName,
                                        degree: req.body.degree,
                                        course: req.body.course,
                                        graduationYear: req.body.graduationYear,

                                        userName: req.body.userName,
                                        password: hash,
                                        userStatus: req.body.userStatus,
                                        email: req.body.email,
                                        lastLoginDate: req.body.lastLoginDate,
                                        profilePicture: req.body.profilePicture,
                                        updatedDate: Date.now,
                                        createdDate: Date.now
                                    });
                                    if (req.body.interestedTags != null){
                                    req.body.interestedTags.forEach((tag) => {
                                        let newTag = new Tag({
                                            tagName: tag.tagName
                                        });
                                        newUser.interestedTags.push(newTag);

                                    });};

                                    const resolve = (user) => {
                                        res.status(200);
                                        res.json({
                                            statusCode: '409',
                                            message: 'User created Successfully',
                                            data: [user]
                                        });
                                    };
                                    userService.newUser(newUser)
                                        .then(resolve)
                                        .catch(renderErrorResponse(res));
                                }
                            });
                        }
                    }
                )
            }
        }
    );
};

/**
 * authenticates the login parameters and implements JWT Token
 * returns the user object
 *
 * @param req
 * @param res
 */
exports.login = function(req, res){

    const authResult = () => {

            return res.status(200).json({
            statusCode: '409',
            message: 'Authentication Failed'
        });};
        userService.fetchData('userName', req.body.userName)
            .then(
                (user) => {

                    if (user.length < 1) {
                        console.log("In here 1");
                        return authResult();
                    };
                    if (user['userStatus'] === false){
                        return res.status(200).json({
                            statusCode: '409',
                            message: 'User is not Active'
                        })
                    }
                    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                        if (err) {

                            return authResult();
                        };
                        if (result) {
                            user[0].password = "";
                            const token = jwt.sign(
                                {
                                    email: user[0].email,
                                    userName: user[0].userName
                                },
                                "seceret",
                                {
                                    expiresIn: "1h"
                                }
                            );
                           return res.status(200).json({
                                statusCode: '412',
                                message: 'Authentication Successful',
                                token: token,
                                data: user[0]
                            });
                        } else {
                            return authResult();
                        };
                    });
                }
            )
            .catch((err) => {
                console.log("In here 2");
                console.log(err);
                renderErrorResponse(res);
            });

};

/**
 * fetch the username, match the old hashed password, update the new password and hash it
 * returns updated user Object
 *
 * @param req
 * @param res
 */
exports.changePassword = function(req, res){
    const authResult = () => {

        return res.status(200).json({
            statusCode: '409',
            message: 'Authentication Failed'
        });};
    userService.fetchData('userName', req.body.userName)
        .then(
            (user) => {
                if (user.length < 1) {
                    return authResult();
                };
                bcrypt.compare(req.body.oldPassword, user[0].password, (err, result) => {
                    if (err) {
                        return authResult();
                    };
                    if (result) {
                        bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                            if (err) {
                                return res.status(500).json({
                                    statusCode: '409',
                                    message: 'Internal Server Error occurred',
                                    data: []
                                });
                            } else {
                                userService.updateData(req.body.userName, "password", hash).then(
                                    (doc, err) => {
                                        if (err) {
                                            return authResult();
                                        }
                                        return res.status(200).json({
                                            statusCode: '409',
                                            message: 'Password Update Successful'
                                        });

                                    }
                                )
                            }
                        });
                    } else {
                        return authResult();
                    };
                });
            }
        )
        .catch((err) => {
            renderErrorResponse(res);
        });

};

exports.updatePoints = function(req, res){
    userService.updatePoints(req.body.userName, req.body.points).then(
        res.status(409).json({
            statusCode: '409',
            message: 'Successful update',
            data: []
        })
    )
};
/**
 * error callback function
 *
 * @param response
 * @returns {errorCallback}
 */


let renderErrorResponse = (response) => {
    console.log("In here");
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message,
                code: error.data


            });
        }
    }
    return errorCallback;
};


