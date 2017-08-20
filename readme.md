# an-array-of-english-words

An array of ~275,000 English words derived from [the Letterpress word
list](https://github.com/atebits/Words). Works with node and browserify.

## Programmatic Usage

To use the module in Javascript code, install it locally:

```sh
npm install an-array-of-english-words --save
```

Then:

```js
const words = require('an-array-of-english-words')
const funWords = words.filter(w => !!w.match(/^fun/i))
console.log(funWords)
```

## Command Line Usage

There's a CLI that prints all words to STDOUT. Install it globally:

```sh
npm i -g an-array-of-english-words
words | grep cheese
```

## See Also

- [similar-english-words](http://ghub.io/similar-english-words)
- [an-array-of-spanish-words](https://github.com/zeke/an-array-of-spanish-words)
- [an-array-of-french-words](https://github.com/zeke/an-array-of-french-words)