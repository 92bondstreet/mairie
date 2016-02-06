'use strict';

let url = require('url');

/**
 * Parse maps urls from amf.asso.fr
 *
 * @param  {Array} urls
 * @return {Object} coordinates
 */
module.exports = function amf (urls) {
  //get url with maps.google.com hostname
  //to then parse the coordinates
  let gMaps = null;
  let coordinates = [];

  for (let href of urls) {
    gMaps = url.parse(href, true);
    if (gMaps.hostname.includes('maps.google.com')) {
      break;
    }
  }

  coordinates = gMaps && gMaps.query.ll.split(',') || [];

  return {
    'latitude': coordinates[0],
    'longitude': coordinates[1]
  };
};
