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
    expressApp.route('/login')
        .post(userController.login);


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

    // -- Answer
    //TODO uncomment below for issue #11
    // expressApp.route('/questions/:questionId/answers')
    //     .put(questionController.putAnswer);
    // -- Tags

    const tagController = require('../controller/tag-controller');

    expressApp.route('/tags')
        .get(tagController.list)
        .post(tagController.post);

    /**
     * Routes '/tags/:tagID' endpoints to get, Update, Delete a tag
     *
     * @param 'tags/:tagID'
     */
    expressApp.route('/tags/:tagID')
        .get(tagController.get)
        .put(tagController.put)
        .delete(tagController.delete);


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
