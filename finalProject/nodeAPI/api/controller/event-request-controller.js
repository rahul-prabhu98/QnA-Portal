/**
 * including the service object and event-request object
 */

let eventService = require('../services/event-service');
let eventRequestObj = require('./../model/event-request');
/**
 * handleErrorFunction a function to handle the http errors when called
 *
 * @param response
 */
let errorHandler = function(response) {
    let errorFunction = function (error) {
        response.status(500);
        response.json({
            message: error.message
        });


    };
    return errorFunction;
};

/**
 * Creates a new event Request with the request JSON and
 * returns event JSON object.
 *
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    let myEventRequestObj = Object.assign({}, request.body);
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventService.create(myEventRequestObj)
        .then(resolve)
        .catch(errorHandler(response));
};
// -------------------------------------------------------------------------------------------------------------------------------------



/**
 * Returns a list of event request in JSON based on the
 * search parameters.
 *
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    let p = request.query.p;
    let val = request.query.val;

    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    console.log((p + val));
    if(p){

        eventService.search({ [p] : val }).then(resolve).catch(errorHandler(response));
    }else{
        eventService.search({}).then(resolve).catch(errorHandler(response));
    }
};







/**
 * Gets an event with specified ID
 * returns event JSON object.
 *
 * @param request
 * @param response
 */
exports.get = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventService.get(request.params.eventRequestID)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Gets an event with specified ID
 * returns event JSON object.
 *
 * @param request
 * @param response
 */
exports.orgGet = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventService.orgGet(request.params.organizerID)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Gets an event with specified ID
 * returns event JSON object.
 *
 * @param request
 * @param response
 */
exports.attGet = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };

    eventService.attGet(request.params.attendeeID)
        .then(resolve)
        .catch(errorHandler(response));
};


/**
 * Updates and returns a event object in JSON.
 *
 * @param request
 * @param response
 */
exports.put = function (request, response) {
    let eventRequestObj = Object.assign({}, request.body);
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventRequestObj._id = request.params.eventRequestID;
    eventService.update(eventRequestObj)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Updates and returns a event object in JSON.
 *
 * @param request
 * @param response
 */
exports.orgPut = function (request, response) {
    let eventRequestObj = Object.assign({}, request.body);
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventObj._id = request.params.organizerID;
    eventService.update(eventRequestObj)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Updates and returns a event object in JSON.
 *
 * @param request
 * @param response
 */
exports.attPut = function (request, response) {
    let eventRequestObj = Object.assign({}, request.body);
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventObj._id = request.params.eventID;
    eventService.update(eventRequestObj)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Deletes a event object.
 *
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json({
            message: 'event Successfully deleted'
        });
    };
    eventService.delete(request.params.eventID)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Deletes a event object.
 *
 * @param request
 * @param response
 */
exports.orgDelete = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json({
            message: 'event Successfully deleted'
        });
    };
    eventService.delete(request.params.eventID)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Deletes a event object.
 *
 * @param request
 * @param response
 */
exports.attDelete = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json({
            message: 'event Successfully deleted'
        });
    };
    eventService.delete(request.params.eventID)
        .then(resolve)
        .catch(errorHandler(response));
};
