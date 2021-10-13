# has-postalcode

[![status](https://api.travis-ci.org/angelcustodio/has-postalcode.svg?branch=master)](https://travis-ci.org/angelcustodio/has-postalcode)
[![version](https://badge.fury.io/js/discord-steam-bot.svg)](https://npmjs.org/package/has-postalcode)
[![downloads](http://img.shields.io/npm/dm/has-postalcode.svg)](https://npmjs.org/package/has-postalcode)


Check if a country has (or uses) postal codes or not. Simple as that.
It's ISO 3166-1 compliant so you can use 2-3 characters/numeric country code or standarized english name.

The package basically checks a list of no-postalcode countries. When checking for a country that is **on** the list, the returned value will be `false`. In case of checking for a country that is **not** included in the list or for any other non-supported value, it will return `true`.

## Installation

```sh
$ npm install has-postalcode
```

## How to use it

```js
import hasPostalCode from 'has-postalcode'

hasPostalCode(044) // => false
hasPostalCode('BS') // => false
hasPostalCode('BHS') // => false
hasPostalCode('Bahamas') // => false

hasPostalCode('Spain') // => true
```

## License

**has-postalcode** is released under [MIT](https://github.com/angelcustodio/has-postalcode/blob/master/LICENSE.md) License<br>

## Author

Angel Custodio - find me [@dntrshm](https://twitter.com/dntrshm)
