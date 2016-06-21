'use strict';

var errors = require('./components/errors');
var bodyParser = require('body-parser');
var multer = require('multer');

module.exports = function (app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    //app.use(multer());    

    app.use('/api/admin/*', require('./api/admin'));
    app.use('/api/*', require('./api/basicAuth'));
    app.use('/api/books/*', require('./api/books'));
    app.use('/api/categories/*', require('./api/categories'));

    app.route('/:url(api|components|app|bower_components|assets)/*').get(errors[404]);

    app.route('/*').get(function (req, res) {
        res.send({ 'message': 'forbidden zone' });
    });

}