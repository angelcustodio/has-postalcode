'use strict'

const countries = require('./countries.json')
const iso31661 = require('iso-3166')

const listedCountry = (value) => {
  const isListed = countries.find(country => country === value)

  return !!isListed
}

const valueType = (value) => {
  if (typeof value === 'number') return 'numeric'
  if (value.length === 2) return 'alpha2'
  if (value.length === 3) return 'alpha3'
  return 'name'
}

const hasPostalCode = (country) => {
  const collection = iso31661.filter(item => listedCountry(item.name))
  const type = valueType(country)
  const result = collection.filter(item => item[type] === country)

  return !result.length
}

module.exports = hasPostalCode
