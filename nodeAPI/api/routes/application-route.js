/**
 * Application endpoint route definitions.
 */

'use strict';

/**
 * exports the initialization of the api to handle and route the incoming requests
 *
 * @param expressApp
 */
module.exports = function (expressApp) {
    // -- Users
    const userController = require('../controller/user-controller');
    expressApp.route('/signup')
        .post(userController.signup)

    //-- Question


    // -- Answer


    // -- Meeting/Event

    const eventController = require('../controller/event-controller');
    /**
     * Routes '/events/' endpoints to get?p='<field>'&val='<Value>' OR Create a new event
     *
     * @param expressApp
     */
    expressApp.route('/events')
        .get(eventController.list)
        .post(eventController.post);

    /**
     * Routes '/events/:eventID' endpoints to get, Update, Delete an event
     *
     * @param 'events/:eventID'
     */
    expressApp.route('/events/:eventID')
        .get(eventController.get)
        .put(eventController.put)
        .delete(eventController.delete);
};
