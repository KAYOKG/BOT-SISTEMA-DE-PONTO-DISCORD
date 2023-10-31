[![Code Climate](https://codeclimate.com/github/rossPatton/quick.js/badges/gpa.svg)](https://codeclimate.com/github/rossPatton/quick.js) [![Test Coverage](https://codeclimate.com/github/rossPatton/quick.js/badges/coverage.svg)](https://codeclimate.com/github/rossPatton/quick.js/coverage)

# quick.js
Lightweight, Modular, Isomorphic, DOM Traversal Library

inspired by [sprintjs](https://github.com/bendc/sprint)

this package is just an experiment to create a very thin jquery like wrapper for dom manipulation that works universally. it weighs in at a whopping 11kb and uses native methods for everything.

more or less matches the functionality of [jQuery dom manipulation methods](https://api.jquery.com/category/manipulation/), Not a library to use if you have to support legacy browsers. I don't support the various alias methods, having just one method for each thing.

Selections are cached by default, and the cache is bustable (props to [Eric Mann](http://ttmm.io/tech/selector-caching-jquery/)).

If you want to contribute, I could use a little help with asyncing the whole thing, ala jquery 3 style.

Coverage is good and it's more or less type safe, but I can always use help there to tighten things up.

Some methods may not be an exact copy of their jquery counterparts. This is a quick and dirty dom manipulation library, not a jquery replacement.

Contributions and PRs very welcome.
