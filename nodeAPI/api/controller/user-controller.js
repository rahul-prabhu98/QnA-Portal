
'use strict';

const userService = require('../services/user-services');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
                                    const newUser = new User({
                                        //_id: new mongoose.Types.ObjectId,
                                        userName: req.body.userName,
                                        password: hash,
                                        userStatus: req.body.userStatus,
                                        email: req.body.email,
                                        lastLoginDate: req.body.lastLoginDate,
                                        profilePicture: req.body.profilePicture,
                                        updatedDate: Date.now,
                                        createdDate: Date.now
                                    });
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
                    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                        if (err) {
                            return authResult();
                        };
                        if (result) {
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
                                statusCode: '409',
                                message: 'Authentication Successful',
                                token: token
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


