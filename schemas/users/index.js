'use strict';

var mongoose = require('../../components/core/connectionstring');

var userSchema = mongoose.Schema({
    UserName: String,
    Password: String,
    Email: String,
    NameSurname: String,
    CreatedDate: String,
    UpdatedDate: String,
    Type: String,
    IsValid: Boolean,
    IsActive: Boolean,
});

var User = mongoose.model('tbl_users', userSchema);

module.exports = User;