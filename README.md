# an-array-of-english-words

An array of ~275,000 English words derived from [the Letterpress word
list](https://github.com/atebits/Words). Works with node, iojs, and browserify.

## Installation

```sh
npm install an-array-of-english-words --save
```

### Usage

```js
var words = require("an-array-of-english-words")
var funWords = words.filter(function(w) { return !!w.match(/^fun/i) })
console.log(funWords)
```
