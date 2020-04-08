'use strict';

const express = require('express');
const ServiceAController = require('./serviceA.controller');
const router = express.Router();

router.get('/name', ServiceAController.getName);

module.exports = router;
