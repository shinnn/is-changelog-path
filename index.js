'use strict';

const {basename, posix: {sep: posixSep}, win32: {sep: win32Sep}} = require('path');

const chagelogFilenameRegex = require('changelog-filename-regex');

module.exports = function isChangelogPath(path) {
	if (typeof path !== 'string') {
		return false;
	}

	if (path.endsWith(posixSep)) {
		return false;
	}

	if (path.endsWith(win32Sep)) {
		return false;
	}

	return chagelogFilenameRegex.test(basename(path));
};
