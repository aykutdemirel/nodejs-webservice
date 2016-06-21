'use strict';

// Production specific configuration
// =================================
var api = {
    protocol: 'http',
    hostname: '104.131.130.240',
    port: '9090',
    version: 'v1'
};
api.url = api.protocol + '://' + api.hostname + ':' + api.port + '/' + api.version;

var adminApi = {
    protocol: 'http',
    hostname: '104.131.130.240',
    port: '9091'
};
adminApi.url = adminApi.protocol + '://' + adminApi.hostname + ':' + adminApi.port;

var composer = {
    protocol: 'http',
    hostname: '104.131.130.240',
    port: '1880'
}
composer.url = composer.protocol + '://' + composer.hostname + ':' + composer.port;

module.exports = {
    
    api: api,
    
    adminApi: adminApi,
    
    composer: composer

};