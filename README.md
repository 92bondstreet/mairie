# Mairie

> Get lat/long for a given French City Hall: Mairie

## Usage

```
let mairie = require('mairie');
let insee = '75000';

mairie(insee, (err, coordinates) => {
  console.log(coordinates);
});

//{ latitude: '48.856614', longitude: '2.352222' }
```

## Source

[Association des Maires de France](http://www.amf.asso.fr)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
