'use strict';
var express = require('express');
var controller = require('./categories.controller');
var router = express.Router();

router.get('/', controller.categories_get);
router.post('/', controller.categories_create);

module.exports = router;