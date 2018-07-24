'use strict';

const {join, resolve} = require('path');

const isChangelogPath = require('.');
const test = require('tape');

test('isChangelogPath()', t => {
	t.equal(
		isChangelogPath('changelog'),
		true,
		'should return `true` when the path looks like a CHANGELOG file.'
	);

	t.equal(
		isChangelogPath(join('foo', 'bar baz/releases.md')),
		true,
		'should strip directories.'
	);

	t.equal(
		isChangelogPath(resolve('/0', '1/2/3/history.txt')),
		true,
		'should support absolute path.'
	);

	t.equal(
		isChangelogPath('change\nlog'),
		false,
		'should return `false` when the path doesn\'t look like a CHANGELOG file.'
	);

	t.equal(
		isChangelogPath('dir/changelog/'),
		false,
		'should return `false` when the path looks like a POSIX directory.'
	);

	t.equal(
		isChangelogPath('dir\\changelog\\'),
		false,
		'should return `false` when the path looks like a WIN32 directory.'
	);

	t.equal(
		isChangelogPath(''),
		false,
		'should return `false` when it takes an empty string.'
	);

	t.equal(
		isChangelogPath(1),
		false,
		'should return `false` when it takes a non-string argument.'
	);

	t.equal(
		isChangelogPath(),
		false,
		'should return `false` when it takes no arguments.'
	);

	t.end();
});
