'use strict';
var express = require('express');
var controller = require('./apartments.controller');

var router = express.Router();
router.post('/', controller.create_apartment);

module.exports = router;