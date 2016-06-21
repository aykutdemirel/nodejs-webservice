'use strict';

var admin_schema = require('../../schemas/admin/');
var timer = require('../../components/core/timer');
var passwordHash = require('password-hash');

exports.admin_create = function (req, res) {
    
    try {
        
        var admin = new admin_schema({
            UserName: req.body.UserName,
            UserPassword: passwordHash.generate(req.body.UserPassword),
            UserMail: req.body.UserMail,
            CreatedDate: timer.time(),
            UpdatedDate: '',
            IsValid: true,
            IsActive: true,
            ResetPasswordKey: ''
        });
        
        var st = "";

        admin.save(function (err) {
            if (err) {
                res.send({ 'result': false, 'message': err });
            } else {
                res.send({ 'result': true, 'admin': admin });
            }
        });

    } catch (err) {
        res.send({ 'result': false, 'message': err });
    }

}; 