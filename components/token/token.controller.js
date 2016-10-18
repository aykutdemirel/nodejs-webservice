'use strict';
var auth = require('basic-auth');
var jwt = require('jsonwebtoken');

exports.user_control = function (req, res) {

// check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

// decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }

};

exports.user_control_put = function (req, res) {

}


