# is-changelog-path

[![npm version](https://img.shields.io/npm/v/is-changelog-path.svg)](https://www.npmjs.com/package/is-changelog-path)
[![Build Status](https://travis-ci.com/shinnn/is-changelog-path.svg?branch=master)](https://travis-ci.com/shinnn/is-changelog-path)
[![codecov](https://codecov.io/gh/shinnn/is-changelog-path/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/is-changelog-path)

Check if a given value is a `string` that looks like a CHANGELOG file path

```javascript
const isChangelogPath = require('is-changelog-path');

// Relative paths

isChangelogPath('CHANGELOG.txt'); //=> true
isChangelogPath('lib/index.js'); //=> false

// Absolute paths

isChangelogPath('/Users/shinnn/docs/history.md'); //=> true
isChangelogPath('/Applications/Google Chrome.app'); //=> false
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install is-changelog-path
```

## API

```javascript
const isChangelogPath = require('is-changelog-path');
```

### isChangelogPath(*filePath*)

*filePath*: `any`  
Return: `boolean`

It returns `true` if it takes a `string` whose [last path portion](https://nodejs.org/api/path.html#path_path_basename_path_ext) matches [changelog-filename-regex](https://github.com/shinnn/changelog-filename-regex), otherwise `false`.

```javascript
const isChangelogPath = require('is-changelog-path');

isChangelogPath('release-note.md'); //=> true
isChangelogPath('/Users/shinnn/release-note.md'); //=> true

isChangelogPath('release/-note.md'); //=> false
isChangelogPath('release-note.md.js'); //=> false
isChangelogPath('release-note.md/'); //=> false
isChangelogPath('release-note.md\\'); //=> false

isChangelogPath(new Set(['not', 'a', 'string'])); //=> false
```

## License

[ISC License](./LICENSE) © 2018 - 2019 Shinnosuke Watanabe
