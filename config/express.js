'use strict';

var express = require('express');
var config = require('./environment');
var errorHandler = require('errorhandler');

module.exports = function (app) {
	var env = app.get('env');
	
	if ('production' === env) {

	}
	
	if ('development' === env || 'test' === env) {
		app.use(errorHandler()); // Error handler - has to be last
	}
};