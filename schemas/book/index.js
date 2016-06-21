'use strict';

var mongoose = require('../../components/core/connectionstring');

var bookSchema = mongoose.Schema({
    name: String,
    description: String,
    isvalid: Boolean,
    isactive: Boolean
});

var Book = mongoose.model('books', bookSchema);

module.exports = Book;