'use strict';

var categories_schema = require('../../schemas/categories/');
var timer = require('../../components/core/timer');

exports.categories_get = function (req, res) {
    
    categories_schema.find({}, function (err, categories) {
        
        if (err) {
            throw err;
            res.send({ 'result': false });
        }
        
        res.send({ 'result': true, 'categories': categories });

    });
    
};

exports.categories_create = function (req, res) {
    
    try {
        
        var category = new categories_schema({
            Name: req.body.UserName,
            Description: passwordHash.generate(req.body.Description),
            CreatedDate: timer.time(),
            UpdatedDate: '',
            IsValid: true,
            IsActive: true,
            ResetPasswordKey: '',
            AdminId:
        });
        
        var st = "";
        
        category.save(function (err) {
            if (err) {
                res.send({ 'result': false, 'message': err });
            } else {
                res.send({ 'result': true, 'category': category });
            }
        });

    } catch (err) {
        res.send({ 'result': false, 'message': err });
    }

};
