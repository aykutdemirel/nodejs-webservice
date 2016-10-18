'use strict';

var errors = require('./components/errors');

module.exports = function (app) {

    app.use('/api/admin/*', require('./api/admin'));
    app.use('/api/*', require('./components/token'));
    app.use('/api/books/*', require('./api/books'));
    app.use('/api/categories/*', require('./api/categories'));

    app.route('/:url(api|components|app|bower_components|assets)/*').get(errors[404]);

    app.route('/*').get(function (req, res) {
        res.send({ 'message': 'forbidden zone' });
    });

}