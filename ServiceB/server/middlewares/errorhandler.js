'use strict';

const handleError = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
};

const logError = (error, req, res, next) => {
  console.log(error);
  next(error);
};

const apinotfound = (req, res, next) => {
  const error = new Error('API not found!');
  error.status = 404;
  next(error);
};

const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
};

module.exports = {
  handleError,
  logError,
  apinotfound,
  ignoreFavicon
};
