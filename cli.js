#!/usr/bin/env node
// Writes a grepable list of English words to stdout

require('epipebomb')()
var words = require('./words.js'),
    argv = require('minimist')(process.argv.slice(2));


main = (argv) => {
  if (argv.help || argv.h)
    process.stdout.write(help)
  else if (argv.version || argv.v)
    process.stdout.write(version + "\n")
  else {
    var re = new RegExp(argv._.shift())
    process.stdout.write(words({re: re}).join('\n') + "\n")
  } 
}

var version = require('./package.json').version
var help = `Usage: words [options] [pattern]

v${version}

Options:
  -h, --help      Show command line help
  -v, --version   Show version info

Examples:
words '^foobar$'
foobar
words '^f..bar$'
foobar

Arguments:
  pattern
      Regular expression to search for
`

main(argv)
