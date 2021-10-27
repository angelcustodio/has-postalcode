'use strict'

const noPostalCodeCountries = require('./data/nopostal.js')
const iso31661 = require('./data/iso31661.js')

const listedCountry = (match) => {
  const isListed = noPostalCodeCountries.find(country => country === match)

  return !!isListed
}

const valueType = (value) => {
  if (typeof value === 'number') return 'numeric'
  if (value.length === 2) return 'alpha2'
  if (value.length === 3) return 'alpha3'
  return 'name'
}

const hasPostalCode = (ref) => {
  const collection = iso31661.filter(item => listedCountry(item.name))
  const type = valueType(ref)
  const result = collection.filter(item => item[type] === ref.toString())

  return !result.length
}

module.exports = hasPostalCode
