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
```

Run `words` to print all the words to stdout:

```sh
words
```

Use `grep` to filter by pattern:

```
words | grep cheese
```

Use `egrep` to filter with regular expressions:

```sh
words | egrep '^fun'            # start with 'fun'
words | egrep 'ification$'      # end with 'ification'
words | egrep 'ou?r$'           # end in 'or' or 'our'
```

Use `wc` to find out how many `monkey` words there are:

```sh
words | grep monkey | wc -l
```

Ten random ten-letter words:

```sh
$ words | egrep '^.{10}$' | gshuf | head -10
```

Note: On macOS, `brew install coreutils` to get 
[`gshuf`](https://en.wikipedia.org/wiki/Shuf) and other goodies.

## See Also

- [similar-english-words](https://github.com/words/similar-english-words)
- [an-array-of-spanish-words](https://github.com/words/an-array-of-spanish-words)
- [an-array-of-french-words](https://github.com/words/an-array-of-french-words)