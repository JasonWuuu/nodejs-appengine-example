"use strict";
require("dotenv").config(); // Loads .env (for local)

const express = require("express"),
  middlewares = require("./ServiceA/server/middlewares"),
  logRequest = require("morgan"), // use to log every request
  server = express();

// const config = require('../API/AccessControl/configs');
const routes = require("./routes");

// Server settings
// server.set("env", config.env);
// server.set("port", config.port);
// server.set("hostname", config.hostname);

// parse the url
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

middlewares.init(server);

// init route
routes.init(server);

const hostname = process.env.PROJECT_URL || 'localhost';
const port = process.env.PORT || 80;

server.listen(port, function () {
  console.log("Express server listening on - http://" + hostname + ":" + port);
});

// module.exports = server.start(); //for unit testing
