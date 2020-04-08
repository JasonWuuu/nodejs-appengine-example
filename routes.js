'use strict';

const serverARoute = require('./ServiceA/server/serviceA.route');
const serverBRoute = require('./ServiceB/server/serviceB.route');

function init(server) {
    server.use('/api/serviceA', serverARoute);
    server.use('/api/serviceB', serverBRoute);
    
}

module.exports = {
    init: init
};
