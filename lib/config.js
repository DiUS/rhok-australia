'use strict';

var nconf = require('nconf');

// configure nconf
nconf.file({
  file: 'config.json'
}).env();

module.exports.AWS = {
  accessKeyId: nconf.get('AWS_ACCESS_KEY_ID'),
  secretAccessKey: nconf.get('AWS_SECRET_ACCESS_KEY'),
  region: 'ap-southeast-2'
};
