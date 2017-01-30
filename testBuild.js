const expect = require('chai').expect
const build = require('./build.js')()
const they = it

describe('build', () => {
  they('are in an array', () => {
    expect(build).to.be.an('array')
  })

  they('are over 274,000 in number', () => {
    expect(build.length).to.be.above(274 * 1000)
  })

  they('can have one letter', () => {
    expect(build.filter(word => word.length === 1).length).to.be.above(4)
  })

  they('can have two letters', () => {
    expect(build.filter(word => word.length === 2).length).to.be.above(50)
  })

  they('are all lowercase', () => {
    expect(build.every(word => word === word.toLowerCase())).to.equal(true)
  })

  they('all have length', () => {
    expect(build.every(word => word.length > 0)).to.equal(true)
  })
})
