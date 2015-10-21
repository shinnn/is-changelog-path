# is-changelog-path

[![NPM version](https://img.shields.io/npm/v/is-changelog-path.svg)](https://www.npmjs.com/package/is-changelog-path)
[![Build Status](https://travis-ci.org/shinnn/is-changelog-path.svg?branch=master)](https://travis-ci.org/shinnn/is-changelog-path)
[![Build status](https://ci.appveyor.com/api/projects/status/0idgfgivh7rn7jnr/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-changelog-path/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-changelog-path.svg)](https://coveralls.io/r/shinnn/is-changelog-path)
[![Dependency Status](https://img.shields.io/david/shinnn/is-changelog-path.svg?label=deps)](https://david-dm.org/shinnn/is-changelog-path)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/is-changelog-path.svg?label=devDeps)](https://david-dm.org/shinnn/is-changelog-path#info=devDependencies)

Check if a file [path](http://www.linfo.org/path.html) is a CHANGELOG file

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

isChangelogPath(''); //=> false
```

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
