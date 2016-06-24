'use strict';

var mongoose = require('mongoose');
var uri = "mongodb://178.62.12.99:27017/BookDB";

var opt = {
    user: 'ayktdemirel',
    pwd: '123456'
};

var MongoDB = mongoose.connect(uri, opt).connection;

MongoDB.on('error', function (err) {
    console.log(err.message);
});

MongoDB.once('open', function () {
    console.log("mongodb connection open");
});

module.exports = mongoose;