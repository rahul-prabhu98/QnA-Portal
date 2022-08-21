/**
 * including the tag service and tag model
 */
let tagService = require('./../services/tag-service');
let tagObj = require('./../model/tag');


/**
 * Handles the http error on the server side
 * @param response
 * @returns {errorFunction}
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
 * Returns a list of tags in JSON based on search parameters
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    const resolve = (data) => {
        response.status(200);
        response.json(data);
    };
    tagService.search({})
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Creates a new tag with the request JSON and returns tag type JSON object
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    const tagObj = Object.assign({}, request.body);
    const resolve = (tag) => {
        response.status(200);
        response.json({data: [tag]});
    };
    tagService.create(tagObj)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Returns a tag obj in JSON
 * @param request
 * @param response
 */
exports.get = function (request, response) {
    const resolve = (tag) => {
        response.status(200);
        response.json(tag);
    };
    tagService.get(request.params.tagId)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Updates and returns a tag object in JSON
 * @param request
 * @param response
 */

exports.put = function (request, response) {
    let tagObj = Object.assign({},request.body);
    const resolve = (tag) => {
        response.status(200);
        response.json(tag);
    };
    tagObj._id = request.params.tagID;
    tagService.update(tagService)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Deletes a tag object.
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    const resolve = (tag) => {
        response.status(200);
        response.json({
            message: 'Tag Successfully deleted'
        });
    };
    tagService.delete(request.params.tagId)
        .then(resolve)
        .catch(errorHandler(response));
};

