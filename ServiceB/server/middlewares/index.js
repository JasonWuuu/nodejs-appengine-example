'use strict';

const { passport_init } = require('./authorization');
const { cors } = require('./cors');
// noinspection JSUnusedLocalSymbols
const {
  logError,
  handleError,
  apinotfound,
  ignoreFavicon
} = require('./errorhandler');
const { extract } = require('./extractuserinfo');

const init = function(server) {
  //CORS Handling
  server.use(cors);

  //Verify Token
  if (process.env.NODE_ENV === 'production') {
    passport_init(server);
  }

  // Extract User Info
  server.use(extract);

  server.use(ignoreFavicon);

  // missing route error handling
  // server.use(apinotfound);

  // log error
  server.use(logError);

  // handle error
  server.use(handleError);
};

module.exports = {
  init
};
