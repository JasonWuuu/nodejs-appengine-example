'use strict';

const cors = (req, res, next) => {
  // res.header('server', '');
  res.header('x-powered-by', '');
  if (process.env.NODE_ENV === 'production') {
    let origin =
      req
        .header('host')
        .toLowerCase()
        .endsWith('.xxx.com') > -1
        ? req.headers.origin
        : '';
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Max-Age', 86400);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Cache-Control', 'no-cache, no-store');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // Security header
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-XSS-Protection', '1; mode=block');
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.header(
    'Content-Security-Policy',
    `default-src 'self' 'unsafe-eval' 'unsafe-inline' *.xxx.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' *.xxx.com data:; connect-src 'self' *.xxx.com; upgrade-insecure-requests; block-all-mixed-content`
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    return res.status(200).json({});
  }
  // console.log('CORS ADDED TO HEADER');
  next();
};

module.exports = {cors};
