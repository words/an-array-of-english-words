const expect = require('chai').expect
const builder = require('../lib/builder.js')
const they = it
const words = builder.build()
const wordsJson = builder.buildJson()

describe('words', () => {
  they('are in an array', () => {
    expect(words).to.be.an('array')
  })

  they('are over 274,000 in number', () => {
    expect(words.length).to.be.above(274 * 1000)
  })

  they('can have one letter', () => {
    expect(words.filter(word => word.length === 1).length).to.be.above(4)
  })

  they('can have two letters', () => {
    expect(words.filter(word => word.length === 2).length).to.be.above(50)
  })

  they('are all lowercase', () => {
    expect(words.every(word => word === word.toLowerCase())).to.equal(true)
  })

  they('all have length', () => {
    expect(words.every(word => word.length > 0)).to.equal(true)
  })
})

describe('wordsJson', () => {
  it('is a string', () => {
    expect(wordsJson).to.be.a('string')
  })
  it('can be parsed into over 274,000 words', () => {
    expect(JSON.parse(wordsJson).length).to.be.above(274 * 1000)
  })
})
