'use strict';

var mongoose = require('../../components/core/connectionstring');

var adminSchema = mongoose.Schema({
    UserName: String,
    UserPassword: String,
    UserMail: String,
    CreatedDate: String,
    UpdatedDate: String,
    IsValid: Boolean,
    IsActive: Boolean,
    ResetPasswordKey: String
});

var Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;