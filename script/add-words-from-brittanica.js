const fs = require('fs')
const path = require('path')
const brittanica = require('brittanica')
const existing = require('..')
const { difference } = require('lodash')

const words = []
Object.keys(brittanica).forEach(letter => {
  Object.keys(brittanica[letter]).forEach(word => {
    if (!word.includes("'")) words.push(word)
  })
})

console.log(JSON.stringify(difference(words, existing), null, 2))

// fs.writeFileSync(
//   path.join(__dirname, '../corpus/brittanica.txt'),
//   words.join('\n')
// )