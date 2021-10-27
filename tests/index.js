const hasPostalCode = require('../src/index.js')
const noPostalCodeCountries = require('../src/data/nopostal.js')

describe('hasPostalCode', () => {

  describe('should return true when country has postal code', () => {
    it('with country name', () => {
      expect(hasPostalCode('Spain')).toBe(true)
    })
    it('with alpha2 country code', () => {
      expect(hasPostalCode('ES')).toBe(true)
    })
    it('with alpha3 country code', () => {
      expect(hasPostalCode('ESP')).toBe(true)
    })
    it('with numeric country code', () => {
      expect(hasPostalCode(724)).toBe(true)
    })
  })

  describe('should return false when country does not have postal code', () => {
    it('with country name', () => {
      expect(hasPostalCode('Yemen')).toBe(false)
    })
    it('with alpha2 country code', () => {
      expect(hasPostalCode('TK')).toBe(false)
    })
    it('with alpha3 country code', () => {
      expect(hasPostalCode('TKL')).toBe(false)
    })
    it('with numeric country code', () => {
      expect(hasPostalCode(772)).toBe(false)
    })
  })

  describe('should return false for all listed no-postalcode countries', () => {
    noPostalCodeCountries.forEach(country => {
      it(`like for ${country}`, () => {
        expect(hasPostalCode(country)).toBe(false)
      })
    })
  })
})
