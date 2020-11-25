const fs = require('fs')
const path = require('path')
const corpus = path.join(__dirname, '../corpus')
const outputFile = path.join(__dirname, '../index.json')

function main() {
  const data = fs
    .readdirSync(corpus)
    .flatMap(d => String(fs.readFileSync(path.join(corpus, d))).split('\n'))
    .map(d => d.toLowerCase().trim())
    .filter(Boolean)
    .sort()

  fs.writeFileSync(outputFile, JSON.stringify([...new Set(data)]) + '\n')
}

main()