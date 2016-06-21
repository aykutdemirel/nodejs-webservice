'use strict';

var users_schema = require('../../schemas/users/');
var auth = require('basic-auth');
var passwordHash = require('password-hash');

exports.user_control = function (req, res) {
    
    //basic auth control
    
    var user = auth(req);
    
    users_schema.find({ username: user.name, password: passwordHash.generate(user.pass) }, function (err, users) {
        
        if (err) {
            throw err;
            return res.send({ 'result': false, 'message': 'unexpected error!' });
        }
        
        if (users != null && users.length > 0) {
            req.next();
        } else {
            return res.status(401).send({ 'result': false, 'message': 'wrong username password!' });
        }

    });
    
};

exports.user_control_put = function (req, res) {

}