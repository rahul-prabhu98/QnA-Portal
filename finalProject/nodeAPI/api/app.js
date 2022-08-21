'use strict';
module.exports = function(app) {

    let applicationRoutes = require('./routes/application-route');
    applicationRoutes(app);
};
