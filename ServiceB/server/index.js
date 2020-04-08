'use strict';

const express = require('express');
const middlewares = require('./middlewares');
const logRequest = require('morgan'); // use to log every request
require('dotenv').config(); // Loads .env (for local)

module.exports = function() {
  const server = express();

  const create = function() {
    // Server settings
    // server.set('env', config.env);
    // server.set('port', config.port);
    // server.set('hostname', config.hostname);

    // parse the url
    server.use(express.urlencoded({extended: false}));
    server.use(express.json());

    middlewares.init(server);

    // log all request
    if (process.env.NODE_ENV !== 'test') {
      server.use(logRequest('dev'));
    }
    
    // init route
    const serverBRoute = require('./serviceB.route');
    server.use(`/api/serviceB`, serverBRoute);
  };

  const start = function() {
    // const hostname = server.get('hostname');
    // const port = server.get('port');
    const hostname = process.env.PROJECT_URL || 'localhost';
    const port = process.env.PORT || 80;

    server.listen(port, function() {
      console.log(`Express server listening on - http://${hostname}:${port}`);
    });

    return server;
  };

  return {
    create,
    start
  };
};
