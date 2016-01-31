'use strict';

let mairie = require('./');

mairie('75000', (err, coordinates) => {
  console.log(coordinates);
});
