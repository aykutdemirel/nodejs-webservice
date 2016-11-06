'use strict';

var timer = require('time');
var apartment_schema = require('../../schemas/apartment/');

exports.create_apartment = function (req, res) {
    console.log('here now')
    try {

        var apartment = new apartment_schema({
            SemtMah: req.body.SemtMah,
            Owner: req.body.Owner,
            StreetTag: req.body.StreetTag,
            BinaNo: req.body.BinaNo,
            BinaName: req.body.BinaName,
            Level: req.body.Level,
            ApartmentNo: req.body.ApartmentNo,
            CreatedDate: timer.time(),
            UpdatedDate: '',
            IsValid: true,
            IsActive: true
        });

        apartment.save(function (err) {
            if (err) {
                res.send({ 'result': false, 'message': err });
            } else {
                res.send({ 'result': true, 'user': apartment });
            }
        });

    } catch (err) {
        res.send({ 'result': false, 'message': err });
    }

};