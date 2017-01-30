#!/usr/bin/env node
// Writes a grepable list of English words to stdout

words = require('./words.js')
process.stdout.write(words().join('\n') + "\n")
