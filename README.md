# has-postalcode

[![version](https://img.shields.io/npm/v/has-postalcode?color=red&label=version)](https://www.npmjs.com/package/has-postalcode)
[![status](https://img.shields.io/travis/angelcustodio/has-postalcode)](https://app.travis-ci.com/github/angelcustodio/has-postalcode)
[![size](https://img.shields.io/bundlephobia/min/has-postalcode?color=orange&label=size)](https://www.npmjs.com/package/has-postalcode)
[![downloads](https://img.shields.io/npm/dw/has-postalcode?color=yellow)](https://www.npmjs.com/package/has-postalcode)

Check if a country has (or uses) postal codes or not. Zero dependencies. Simple as that.

It's ISO 3166-1 compliant so you can use 2-3 characters/numeric country code or standarized english name. Standarization can be found in [ISO OBP](https://www.iso.org/obp/ui/#search).

The package basically checks a list of no-postalcode countries. When checking for a country that is **on** the list, the returned value will be `false`. In case of checking for a country that is **not** included in the list it will return `true`. For non-compliant values with ISO 3166-1, it will return `undefined`.

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
hasPostalCode('Españita') // undefined
hasPostalCode('💩') // undefined
```

## License

**has-postalcode** is released by [Angel Custodio](https://twitter.com/ancude) under [MIT](https://github.com/angelcustodio/has-postalcode/blob/master/LICENSE.md) License<br>
