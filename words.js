module.exports = (re=undefined) => {
  var words = require('./build.js')()
  if (re) {
    var re = new RegExp(re)
    words = words.filter((word) => { return re.test(word) })
  }
  return words
}
