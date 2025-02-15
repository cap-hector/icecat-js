/*!
 * Icecat API
 * MIT Licensed
 */
'use strict';
const packagejson = require('./package.json');
const openCatalog = require('./lib/OpenCatalog/service');

/**
 * Icecat instance constructor
 * @prototype
 * @class  Icecat
 */
const icecat = function ({ apiToken, username, password, httpUrl = 'data.icecat.biz/xml_s3/xml_server3.cgi' }) {
    this.VERSION = packagejson.version;
    this.scheme = 'https://';
    this.httpAuth = username + ':' + encodeURIComponent(password);
    this.httpUrl = httpUrl;
    this.apiToken = apiToken;
    this.openCatalog = new openCatalog(this);
};

module.exports = icecat;