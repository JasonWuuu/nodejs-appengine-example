'use strict';

const passport_init = function (server) {
  const passport = require('passport')
  const BearerStrategy = require('passport-azure-ad').BearerStrategy
  const bearerStrategy = new BearerStrategy({
    identityMetadata: process.env.IDENTITY_METADATA,
    clientID: process.env.CLIENT_ID,
    validateIssuer: true,
    passReqToCallback: false,
    audience: process.env.AUD.split(',')
  }, function (token, done) {
    done(null, {}, token);
  });
  passport.use(bearerStrategy);
  server.use(passport.initialize());
  server.use(passport.authenticate("oauth-bearer", {
    session: false
  }));
}

module.exports = {
  passport_init
};
