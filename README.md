jeocoder
========

jeocoder is a geocoder, mapping a 5-digit US zip code or 6-character Canadian postal code to a (city,state/province) tuple. it is self-contained and does not depend on any external services. the [geocoder](https://npmjs.org/package/geocoder) module name was already taken :|

Why not just use Google? It's against their [TOS](https://developers.google.com/maps/terms#section_10_12). :-1:
## Setup
```bash
git clone git@github.com:jmonster/node-jeocoder.git
cd node-jeocoder && npm install
node app
```

## Usage
`GET /postal_codes/:code`

Parameters

+ `:code` a valid 5-digit US zip code or 6-character Canadian postal code

## Examples
```
GET /postal_codes/15213
```
```json
{
  "state": "PA",
  "city": "PITTSBURGH",
  "country": "US"
}
```

```
GET /postal_codes/H2Y1C6
```
```json
{
  "province": "QC",
  "city": "MONTRÉAL",
  "country": "CA"
}
```

## Support
+ `CORS` [Access-Control-Allow-Origin: *](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
+ `JSONP` [/zips/15213?callback=foo](http://jeocoder.herokuapp.com/zips/15213?callback=foo)

## Live Demo
[http://jeocoder.herokuapp.com/zips/15213](http://jeocoder.herokuapp.com/zips/15213)
