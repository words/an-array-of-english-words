const fs = require('fs')
const path = require('path')
const chain = require('lodash').chain
const basepath = path.join(__dirname, 'corpus')

const build = chain(fs.readdirSync(basepath)
  .map(filename => fs.readFileSync(path.join(basepath, filename), 'utf8').split('\n')))
  .flatten()
  .compact()
  .map(word => word.toLowerCase())
  .uniq()
  .sort()
  .value()

module.exports = {
  build: () => { return build },
  buildJson: () => { return JSON.stringify(build)}
}
