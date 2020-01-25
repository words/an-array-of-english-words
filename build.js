var fs = require('fs')
var path = require('path')
var https = require('https')
var concat = require('concat-stream')
var bail = require('bail')

var root = 'corpus'
var endpoint =
  'https://raw.githubusercontent.com/lorenbrichter/Words/master/Words/en.txt'

https.request(endpoint, onrequest).end()

function onrequest(res) {
  res.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var data = fs
    .readdirSync(root)
    .flatMap(d => String(fs.readFileSync(path.join(root, d))).split('\n'))
    .concat(String(buf).split('\n'))
    .map(d => d.toLowerCase())
    .filter(Boolean)
    .sort()

  fs.writeFile('index.json', JSON.stringify([...new Set(data)]) + '\n', bail)
}
