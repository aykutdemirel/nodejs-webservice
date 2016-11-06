'use strict';
var express = require('express');
var controller = require('./users.controller');

var router = express.Router();
router.post('/', controller.create_user);

module.exports = router;