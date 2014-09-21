'use strict';

var conf = require('../lib/config');
var vogels = require('vogels');
vogels.AWS.config.update(conf.AWS);

var rhokLocation = require('../models/location');
var rhokEvent = require('../models/event');

module.exports = function(app) {

  app.get('/events', function(req, res, next) {

    rhokLocation.create({
      name: 'AGSE Building, Swinburne University',
      address: 'John Street',
      suburb: 'Hawthorn',
      postalCode: '3122',
      state: 'VIC',
      lat: -37.821320,
      lon: 145.039383
    }, function(err, loc) {

      rhokEvent.create({
        name: 'RHoK Dec 2014',
        dateStart: new Date(),
        dateEnd: new Date(),
        description: 'Super duper RHoK 2014',
        location: '9e5b3783-78f0-458b-8a44-de0d6140bfde'
      }, function(err, evt) {});

    });

    res.end();
  });

  app.post('/events', function(req, res, next) {});

  app.put('/events/:id', function(req, res, next) {});

}
