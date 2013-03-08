jeocoder
========

jeocoder is a geocoder, mapping a 5 digit zip code to a (city,state) tuple. it is self-contained and does not depend on any external services.

Why not use Google? It is against their [TOS](https://developers.google.com/maps/terms#section_10_12).
## Setup
```bash
git clone git@github.com:jmonster/node-jeocoder.git
cd node-jeocoder && npm install
node app
```

## Usage
`GET /zips/:zipcode`

Parameters

+ `:zipcode` a valid 5 digit US zip code

## Live Demo
[http://jeocoder.herokuapp.com/zips/15213](http://jeocoder.herokuapp.com/zips/15213)
