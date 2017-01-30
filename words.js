module.exports = (args={}) => {
  var words = require('./build.js')()
  if (args.re) {
    words = words.filter((word) => { return args.re.test(word) })
  }
  return words
}