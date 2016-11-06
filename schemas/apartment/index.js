'use strict';

var mongoose = require('../../components/core/connectionstring');

var apartmentSchema = mongoose.Schema({
    SemtMah: String,
    Owner: String,
    StreetTag: String,
    BinaNo: String,
    BinaName: String,
    Level: String,
    ApartmentNo: Number,
    CreatedDate: String,
    UpdatedDate: String,
    IsValid: Boolean,
    IsActive: Boolean
});

var Apartment = mongoose.model('tbl_apartments', apartmentSchema);

module.exports = Apartment;