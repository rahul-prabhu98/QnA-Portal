
'use strict';

const userService = require('../services/user-services');

exports.signup = function (req, res) {
    const newUser = Object.assign({}, req.body);
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    };
    userService.newUser(newUser)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};


