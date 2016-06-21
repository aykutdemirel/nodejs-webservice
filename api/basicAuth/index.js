'use strict';
var express = require('express');
var controller = require('./basicAuth.controller');
var router = express.Router();

router.get('/', controller.user_control);

module.exports = router;