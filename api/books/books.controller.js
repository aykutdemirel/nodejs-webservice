'use strict';

var book_schema = require('../../schemas/book/');

exports.books_get = function (req, res) {
    
    book_schema.find({}, function (err, categories) {
        
        if (err) {
            res.send({ 'result': false, 'message': err });
        }
        
        res.send({ 'result': true, 'categories': categories });

    });

};