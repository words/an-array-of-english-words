const expect = require('chai').expect
const words = require('./words.js')
const they = it

describe('words', () => {
  it('has an array of words', () => {
    expect(words()).to.be.an('array')
  })

  they('are grepable', () => {
    // http://stackoverflow.com/a/17527174/2909897
    expect(words(/^aalii$/)).to.eql(['aalii'])
  })
})
