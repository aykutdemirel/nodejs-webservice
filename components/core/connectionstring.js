'use strict';

var mongoose = require('mongoose');
var uri = "mongodb://192.168.1.101:27017/SayacDB";
//var uri = "mongodb://138.68.168.65:27017/SayacDB";

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