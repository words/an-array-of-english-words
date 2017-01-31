 module.exports = (args={}) => {
  var words = require('./words.json')
  if (args.re) {
    words = words.filter((word) => { return args.re.test(word) })
  }
  return words
}