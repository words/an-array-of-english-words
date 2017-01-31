const expect = require('chai').expect
const words = require('../lib/words.js')
const they = it

describe('words', () => {
  it('has an array of words', () => {
    expect(words()).to.be.an('array')
  })
  they('are grepable', () => {
    expect(words({re: /^cool$/})).to.eql(['cool'])
    expect(words({re: /^woot$/})).to.eql(['woot'])
  })
})
