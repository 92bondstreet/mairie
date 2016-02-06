/*eslint-disable no-console*/
'use strict';

let mairie = require('./');

mairie('75000', (err, coordinates) => {
  if (err) {
    console.log(err);
  }

  console.log(coordinates);
});

mairie('97401', (err, coordinates) => {
  if (err) {
    console.log(err);
  }

  console.log(coordinates);
});

mairie('0000', (err, coordinates) => {
  if (err) {
    console.log(err);
  }

  console.log(coordinates);
});
