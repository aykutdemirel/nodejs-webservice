'use strict';

var timer = require('time');
var user_schema = require('../../schemas/users/');

exports.create_user = function (req, res) {
    console.log('here now')
    try {

        var user = new user_schema({
            UserName: req.body.UserName,
            Password: req.body.Password,
            Email: req.body.Email,
            NameSurname: req.body.NameSurname,
            CreatedDate: timer.time(),
            UpdatedDate: '',
            Type: 'Admin',
            IsValid: true,
            IsActive: true
        });

        user.save(function (err) {
            if (err) {
                res.send({ 'result': false, 'message': err });
            } else {
                res.send({ 'result': true, 'user': user });
            }
        });

    } catch (err) {
        res.send({ 'result': false, 'message': err });
    }

};