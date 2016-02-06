'use strict';

let amf = require('./amf');
let scraperjs = require('scraperjs');

/**
 * Get the coordinates from INSEE code
 *
 * @param  {String} insee
 * @param  {Function} callback
 */
module.exports = function mairie (insee, callback) {
  scraperjs.DynamicScraper
    .create(`http://www.amf.asso.fr/annuaire/index.asp?refer=commune&dep_n_id=&NUM_INSEE=${insee}`)
    .delay(1000, $ => $)
    .scrape(function scrape ($) {
      return $('#map-canvas a').map(function map () {
        return $(this).attr('href');
      }).get();
    })
    .then(urls => {
      callback && callback(null, amf(urls));
    });
};
