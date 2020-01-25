# `an-array-of-english-words`

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of ~275,000 English words.
Derived from [the Letterpress word list][letterpress].

## Install

[npm][]:

```sh
npm install an-array-of-english-words
```

## Use

```js
var words = require('an-array-of-english-words')

console.log(words.filter(d => /fun/.test(d)))
```

Yields:

```js
[
  'antifungal',
  'antifungals',
  'bifunctional',
  'cofunction',
  'cofunctions',
  // …and many more
]
```

## API

### `anArrayOfEnglishWords`

`Array.<string>` — List of all English words, lowercased.

## CLI

Install the CLI globally:

```sh
npm i -g an-array-of-english-words
```

Now run `words` to print all the words to stdout:

```sh
words
```

Use `grep` to filter by pattern:

```sh
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

Ten random ten-letter words (note: on macOS, do `brew install coreutils` to get
[`gshuf`][shuf]):

```sh
$ words | egrep '^.{10}$' | gshuf | head -10
```

## Related

*   [`similar-english-words`](https://github.com/words/similar-english-words)
*   [`an-array-of-spanish-words`](https://github.com/words/an-array-of-spanish-words)
*   [`an-array-of-french-words`](https://github.com/words/an-array-of-french-words)

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/words/an-array-of-english-words.svg

[build]: https://travis-ci.org/words/an-array-of-english-words

[downloads-badge]: https://img.shields.io/npm/dm/an-array-of-english-words.svg

[downloads]: https://www.npmjs.com/package/an-array-of-english-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/an-array-of-english-words.svg

[size]: https://bundlephobia.com/result?p=an-array-of-english-words

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com

[letterpress]: https://github.com/lorenbrichter/Words

[shuf]: https://en.wikipedia.org/wiki/Shuf
