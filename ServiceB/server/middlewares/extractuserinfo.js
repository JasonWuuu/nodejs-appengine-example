'use strict';

const jwt = require('jsonwebtoken');

const extract = function(req, res, next) {
  // if deployed in app engine
  if (process.env.NODE_ENV === 'production') {
    const jwtToken = req.headers.authorization.substring(7);
    var decoded = jwt.decode(jwtToken, {complete: true});
    process.env.ENTERPRISEID = decoded.payload.unique_name.substring(0, decoded.payload.unique_name.lastIndexOf('@'));
    req.ENTERPRISEID = decoded.payload.unique_name.substring(0, decoded.payload.unique_name.lastIndexOf('@'));
    req.DECODED_USER = decoded;
  } else {
    //FOR LOCALHOST
    req.ENTERPRISEID = process.env.ENTERPRISEID;
  }

  next();
};

module.exports = {
  extract
};
