'use strict';

const path = require('path');

const chagelogFilenameRegex = require('changelog-filename-regex');
const isDirLikePath = require('is-dir-like-path');

function isChangelogPathCore(filePath, pathObj) {
	if (typeof filePath !== 'string') {
		throw new TypeError(`${filePath} is not a string. Expected a file path.`);
	}

	return !isDirLikePath(filePath) && chagelogFilenameRegex.test(pathObj.basename(filePath));
}

module.exports = function isChangelogPath(filePath) {
	return isChangelogPathCore(filePath, path);
};

module.exports.posix = function isChangelogPathPosix(filePath) {
	return isChangelogPathCore(filePath, path.posix);
};

module.exports.win32 = function isChangelogPathWin32(filePath) {
	return isChangelogPathCore(filePath, path.win32);
};
