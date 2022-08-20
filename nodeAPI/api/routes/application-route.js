/**
 * Application endpoint route definitions.
 */

'use strict';
const checkAuth = require('../middleware/check-auth');
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
    expressApp.route('/login')
        .post(userController.login);
    expressApp.route('/user/changePassword')
        .post(checkAuth, userController.changePassword);


    //-- Question

    const questionController = require('../controller/question-controller');

    expressApp.route('/questions')
        .get(questionController.list)
        .post(questionController.post);

    /**
     * Routes '/questions/:id' endpoints to get, Update, Delete a question
     *
     * @param 'questions/:id'
     */
    expressApp.route('/questions/:questionId')
        .get(questionController.get)
        .put(questionController.put)
        .delete(questionController.delete);


    /**
     * For getting all the questions for given user
    */
    expressApp.route('/questions/user/:userName')
        .get(questionController.getById);
        // .put(questionController.put)
        // .delete(questionController.delete);
    // -- Answer

    /**
     * For inserting an answer in a given question
    */
    expressApp.route('/questions/:questionId/answers')
        .post(questionController.insertAnswer);


    /**
     * For updating an answer in a given question
     */
    expressApp.route('/questions/:questionId/answers')
        .put(questionController.updateAnswer);


    const tagController = require('../controller/tag-controller');

    expressApp.route('/tags')
        .get(tagController.list)
        .post(checkAuth,tagController.post);

    /**
     * Routes '/tags/:tagID' endpoints to get, Update, Delete a tag
     *
     * @param 'tags/:tagID'
     */
    expressApp.route('/tags/:tagID')
        .get(checkAuth,tagController.get)
        .put(checkAuth,tagController.put)
        .delete(checkAuth,tagController.delete);


    // -- Meeting/Event

    //const eventController = require('../controller/event-controller');
    //=================================================================================================================================
    const eventRequestController = require('../controller/event-request-controller');
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
    expressApp.route('/events/requests/organizers/:organizerID')
        .get(eventRequestController.orgGet);
        // .put(eventRequestController.orgPut)
        // .delete(eventRequestController.orgDelete);


    /**
     * Routes '/event-request/:eventRequestID' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/events/requests/attendees/:attendeeID')
        .get(eventRequestController.attGet);
        // .put(eventRequestController.attPut)
        // .delete(eventRequestController.attDelete);






//     const icsController = require('../controller/ics-generator');
//     /**
//      * Routes '/events/' endpoints to get?p='<field>'&val='<Value>' OR Create a new event
//      *
//      * @param expressApp
//      */
//     expressApp.route('/ics-generator')
//         .get(icsController.list)
//         .post(eventController.post);
//


    //------------------------------------------------------------
};




