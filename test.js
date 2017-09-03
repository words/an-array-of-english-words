const expect = require('chai').expect
const words = require('.')
const they = it

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

  they('include latecomers like fuckton', () => {
    expect(words).to.include('fuckton')
    expect(words).to.include('fucktons')
  })
})
