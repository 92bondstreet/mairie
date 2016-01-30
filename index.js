'use strict';

let amf = require('./amf');
let request = require('superagent');

module.exports = function mairie (insee, callback) {
  request
    .get('http://www.amf.asso.fr/annuaire/index.asp?')
    .query({'refer': 'commune'})
    .query({'dep_n_id': ''})
    .query({'NUM_INSEE': 'insee'})
    .end((err, res) => {
      console.log(err);
      amf(res);
      callback && callback(err, null, {
        'latitude': '',
        'longitude': ''
      });
    });
};
