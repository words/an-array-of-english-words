const fs = require('fs')
const path = require('path')

const words = require('..')

fs.writeFileSync(
  path.join(__dirname, '../corpus/starter.txt'),
  words.join('\n')
)