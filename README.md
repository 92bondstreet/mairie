# Mairie

> Get lat/long for a given French City Hall: Mairie

## Usage

```
let mairie = require('mairie');
let insee = '75000';

mairie(insee, coordinates => {
  let [latitude, longitude] = coordinates;
});
```

## Source

Coordinates come from [Association des Maires de France](http://www.amf.asso.fr)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
