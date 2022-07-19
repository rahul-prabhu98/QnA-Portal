

let eventService = require('./../services/event-service');
let eventObj = require('./../model/event');
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
 * Returns a list of todoObj in JSON based on the
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

    if(!(p || val)){
        eventService.search({ p : val }).then(resolve).catch(errorHandler(response));
    }else{
        eventService.search({}).then(resolve).catch(errorHandler(response));
    }
};


/**
 * Creates a new event with the request JSON and
 * returns event JSON object.
 *
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    const eventObj = Object.assign({}, request.body);
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventService.create(eventObj)
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
exports.get = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    eventService.get(request.params.eventID)
        .then(resolve)
        .catch(errorHandler(response));
};

