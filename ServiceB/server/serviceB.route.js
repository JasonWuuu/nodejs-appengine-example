'use strict';

const express = require('express');
const ServiceBController = require('./serviceB.controller');
const router = express.Router();

router.get('/name', ServiceBController.getName);

module.exports = router;
