/*!
 * is-changelog-path | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-changelog-path
*/
'use strict';

const path = require('path');

const chagelogFilenameRegex = require('changelog-filename-regex');

module.exports = function isChangelogPath(filePath) {
  if (typeof filePath !== 'string') {
    throw new TypeError(`${filePath} is not a string. Expected a file path.`);
  }

  return chagelogFilenameRegex.test(path.basename(filePath));
};
