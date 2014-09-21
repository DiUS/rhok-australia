'use strict';

var vogels = require('vogels');

var rhokEvent = vogels.define('rhok_event', function(schema) {
  schema.UUID('event_id', {
    hashKey: true
  });
  schema.String('name').required();
  schema.Date('created', {
    default: Date.now
  });
  schema.Date('dateStart').required();
  schema.Date('dateEnd').required();
  schema.String('description');
  // fks
  schema.String('location').required();
  schema.StringSet('committee');
  schema.StringSet('sponsors');
  schema.StringSet('schedule');
});

rhokEvent.config({
  tableName: 'rhok_event'
});

module.exports = rhokEvent;
