'use strict';

var vogels = require('vogels');

var location = vogels.define('rhok_location', function(schema) {
  schema.UUID('location_id', {
    hashKey: true
  });
  schema.String('name').required();
  schema.String('address').required();
  schema.String('suburb').required();
  schema.String('postalCode').required();
  schema.String('state').required();
  schema.Number('lat').required();
  schema.Number('lon').required();
});

location.config({
  tableName: 'rhok_location'
});

module.exports = location;
