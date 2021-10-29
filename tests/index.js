const hasPostalCode = require('../src/index.js')
const noPostalCodeCountries = require('../src/data/nopostal.json')

describe('hasPostalCode', () => {

  const countryIs = {
    included: {
      name: 'Spain',
      alpha2: 'ES',
      alpha3: 'ESP',
      numeric: 724
    },
    notIncluded: {
      name: 'Tokelau',
      alpha2: 'TK',
      alpha3: 'TKL',
      numeric: 772
    }
  }

  describe('when country has postal code', () => {
    const attrs = countryIs.included

    it('should return true with country name', () => {
      expect(hasPostalCode(attrs.name)).toBe(true)
    })
    it('should return true with alpha2 country code', () => {
      expect(hasPostalCode(attrs.alpha2)).toBe(true)
    })
    it('should return true with alpha3 country code', () => {
      expect(hasPostalCode(attrs.alpha3)).toBe(true)
    })
    it('should return true with numeric country code', () => {
      expect(hasPostalCode(attrs.numeric)).toBe(true)
    })
  })

  describe('when country does not have postal code', () => {
    const attrs = countryIs.notIncluded

    it('should return false with country name', () => {
      expect(hasPostalCode(attrs.name)).toBe(false)
    })
    it('should return false with alpha2 country code', () => {
      expect(hasPostalCode(attrs.alpha2)).toBe(false)
    })
    it('should return false with alpha3 country code', () => {
      expect(hasPostalCode(attrs.alpha3)).toBe(false)
    })
    it('should return false with numeric country code', () => {
      expect(hasPostalCode(attrs.numeric)).toBe(false)
    })
  })

  describe('when listed no-postalcode countries', () => {
    noPostalCodeCountries.forEach(country => {
      it(`should return false for ${country}`, () => {
        expect(hasPostalCode(country)).toBe(false)
      })
    })
  })

  describe('when a non-compliant iso-3166-1 value is provided', () => {
    it('should return undefined', () => {
      expect(hasPostalCode(1)).toBeUndefined()
      expect(hasPostalCode('troll')).toBeUndefined()
      expect(hasPostalCode('EZ')).toBeUndefined()
      expect(hasPostalCode('💩')).toBeUndefined()
    })
  })
})
