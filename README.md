# has-postalcode

[![status](https://api.travis-ci.org/angelcustodio/has-postalcode.svg?branch=master)](https://travis-ci.org/angelcustodio/has-postalcode)
[![version](https://badge.fury.io/js/discord-steam-bot.svg)](https://npmjs.org/package/has-postalcode)
[![downloads](http://img.shields.io/npm/dm/has-postalcode.svg)](https://npmjs.org/package/has-postalcode)


Check if a country has (or uses) postal codes or not. Simple as that.

It's ISO 3166-1 compliant so you can use 2-3 characters/numeric country code or standarized english name. Standarization can be found in [ISO OBP](https://www.iso.org/obp/ui/#search).

The package basically checks a list of no-postalcode countries. When checking for a country that is **on** the list, the returned value will be `false`. In case of checking for a country that is **not** included in the list it will return `true`.

For non-compliant values with ISO 3166-1, it will return `undefined`.

## Installation

```sh
$ npm install has-postalcode
```

## How to use it

```js
import hasPostalCode from 'has-postalcode'

hasPostalCode(772) // false
hasPostalCode('TK') // false
hasPostalCode('TKL') // false
hasPostalCode('Tokelau') // false

hasPostalCode('Spain') // true
hasPostalCode('Españita') // false
hasPostalCode('💩') // false
```

## License

**has-postalcode** is released by [Angel Custodio](https://twitter.com/ancude) under [MIT](https://github.com/angelcustodio/has-postalcode/blob/master/LICENSE.md) License<br>
