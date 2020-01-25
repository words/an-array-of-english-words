const fs = require('fs')
const path = require('path')

var root = 'corpus'

var data = fs
  .readdirSync(root)
  .flatMap(d => String(fs.readFileSync(path.join(root, d))).split('\n'))
  .map(d => d.toLowerCase())
  .filter(Boolean)
  .sort()

fs.createWriteStream('index.json').end(
  JSON.stringify([...new Set(data)]) + '\n'
)
