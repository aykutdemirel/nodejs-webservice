'use strict';
var express = require('express');
var controller = require('./admin.controller');
var router = express.Router();

router.post('/', controller.admin_create);

module.exports = router;