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
        .post(userController.signup);


    //-- Question


    // -- Answer


    // -- Meeting/Event

    //const eventController = require('../controller/event-controller');
    //=================================================================================================================================
    const eventRequestController = require('../controller/event-request-controller');
    /**
     * Routes '/events/' endpoints to get?p='<field>'&val='<Value>' OR Create a new event
     *
     * @param expressApp
     */
    // expressApp.route('/events')
    //     .get(eventController.list)
    //     .post(eventController.post); //get all events, create a new event

    /**
     * Routes '/events/:eventID' endpoints to get, Update, Delete an event
     *
     * @param 'events/:eventID'
     */
    // expressApp.route('/events/:eventID')
    //     .get(eventController.get)
    //     .put(eventController.put)
    //     .delete(eventController.delete);

    /**
     * Routes '/event-request' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/events/requests')
        .post(eventRequestController.post)
        .get(eventRequestController.list); // create a new request event

    /**
     * Routes '/event-request' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/events/requests/:eventRequestID')
        .put(eventRequestController.put)
        .get(eventRequestController.get)
        .delete(eventRequestController.delete); // bring all the event requests

    /**
     * Routes '/event-request/:eventRequestID' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/event-requests/organizer/:organizerID')
        .get(eventRequestController.orgGet)
        .put(eventRequestController.orgPut)
        .delete(eventRequestController.orgDelete);


    /**
     * Routes '/event-request/:eventRequestID' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/event-requests/attendee/:attendeeID')
        .get(eventRequestController.attGet)
        .put(eventRequestController.attPut)
        .delete(eventRequestController.attDelete);






    const icsController = require('../controller/ics-generator');
    /**
     * Routes '/events/' endpoints to get?p='<field>'&val='<Value>' OR Create a new event
     *
     * @param expressApp
     */
    expressApp.route('/ics-generator')
        .get(icsController.list)
        .post(eventController.post);

};




