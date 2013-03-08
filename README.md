jeocoder
========

jeocoder is a geocoder, mapping a 5 digit zip code to a (city,state) tuple. it is self-contained and does not depend on any external services. the [geocoder](https://npmjs.org/package/geocoder) module name was already taken :|

Why not just use Google? It's against their [TOS](https://developers.google.com/maps/terms#section_10_12) :-1:.
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

## Example
```
GET /zips/15213
```
```json
{
  "state": "PA",
  "city": "PITTSBURGH"
}
```

## Live Demo
[http://jeocoder.herokuapp.com/zips/15213](http://jeocoder.herokuapp.com/zips/15213)
