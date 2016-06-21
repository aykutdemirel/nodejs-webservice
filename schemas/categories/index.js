'use strict';

var mongoose = require('../../components/core/connectionstring');

var categorySchema = mongoose.Schema({
    name: String,
    description: String,
    isvalid: Boolean,
    isactive: Boolean
});

var Category = mongoose.model('categories', categorySchema);

module.exports = Category;