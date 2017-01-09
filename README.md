# is-changelog-path

[![NPM version](https://img.shields.io/npm/v/is-changelog-path.svg)](https://www.npmjs.com/package/is-changelog-path)
[![Build Status](https://travis-ci.org/shinnn/is-changelog-path.svg?branch=master)](https://travis-ci.org/shinnn/is-changelog-path)
[![Build status](https://ci.appveyor.com/api/projects/status/0idgfgivh7rn7jnr/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-changelog-path/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-changelog-path.svg)](https://coveralls.io/r/shinnn/is-changelog-path)
[![dependencies Status](https://david-dm.org/shinnn/is-changelog-path/status.svg)](https://david-dm.org/shinnn/is-changelog-path)
[![devDependencies Status](https://david-dm.org/shinnn/is-changelog-path/dev-status.svg)](https://david-dm.org/shinnn/is-changelog-path?type=dev)

Check if a given string looks like a CHANGELOG file [path](http://www.linfo.org/path.html)

```javascript
const isChangelogPath = require('is-changelog-path');

isChangelogPath('CHANGELOG.txt'); //=> true
isChangelogPath('doc/History'); //=> true
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install is-changelog-path
```

## API

```javascript
const isChangelogPath = require('is-changelog-path');
```

### isChangelogPath(*filePath*)

*filePath*: `String` (a file path)  
Return: `Boolean`

It returns `true` if [the last portion of a given path](https://nodejs.org/api/path.html#path_path_basename_p_ext) matches [changelog-filename-regex](https://github.com/shinnn/changelog-filename-regex), otherwise `false`. 

```javascript
const isChangelogPath = require('is-changelog-path');

isChangelogPath('release-note.md'); //=> true
isChangelogPath('/Users/you/release-note.md'); //=> true

isChangelogPath('release/-note.md'); //=> false
isChangelogPath('release-note.md.js'); //=> false
isChangelogPath('release-note.md/'); //=> false

isChangelogPath(''); //=> false
```

### isChangelogPath.posix(*filePath*)

*filePath*: `String` (a file path)  
Return: `Boolean`

Always interact in a [posix](https://www.opengroup.org/austin/papers/posix_faq.html) compatible way.

```javascript
isChangelogPath.posix('dir\\history.txt'); //=> false
```

### isChangelogPath.win32(*filePath*)

*filePath*: `String` (a file path)  
Return: `Boolean`

Always interact in a [win32](https://msdn.microsoft.com/library/cc433218) compatible way.

```javascript
isChangelogPath.win32('dir\\history.txt'); //=> true
```

## License

Copyright (c) 2015 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
