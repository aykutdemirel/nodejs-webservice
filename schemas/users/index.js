'use strict';

var mongoose = require('../../components/core/connectionstring');

var userSchema = mongoose.Schema({
    UserName: String,
    Password: String,
    Email: String,
    NameSurname: String,
    Age: Number,
    UserAuth: String,
    KitapSepetiId: String,
    ResetPasswordKey: String,
    CreatedDate: String,
    UpdatedDate: String,
    IsValid: Boolean,
    IsActive: Boolean,
    FacebookId: String,
    ImgUrl: String,
    Gender: String
});

var User = mongoose.model('users', userSchema);

module.exports = User;