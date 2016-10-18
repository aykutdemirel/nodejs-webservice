'use strict';

var express = require('express');
var config = require('./environment');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
var multer = require('multer');
var morgan = require('morgan');

module.exports = function (app) {

	var env = app.get('env');

	app.set('superSecret', config.token.secret);
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	// use morgan to log requests to the console
	app.use(morgan('dev'));

	if ('production' === env) {

	}
	
	if ('development' === env || 'test' === env) {
		app.use(errorHandler()); // Error handler - has to be last
	}
};