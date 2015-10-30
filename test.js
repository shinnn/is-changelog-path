'use strong';

const path = require('path');

const isChangelogPath = require('.');
const tap = require('tap');

tap.test('isChangelogPath', t => {
  t.plan(9);

  t.strictEqual(isChangelogPath.name, 'isChangelogPath', 'should have a function name.');

  t.strictEqual(
    isChangelogPath('changelog'),
    true,
    'should return `true` if the path looks like a CHANGELOG file.'
  );

  t.strictEqual(
    isChangelogPath(path.join('foo', 'bar baz/releases.md')),
    true,
    'should strip directories.'
  );

  t.strictEqual(
    isChangelogPath(path.resolve('/0', '1/2/3/history.txt')),
    true,
    'should support absolute path.'
  );

  t.strictEqual(
    isChangelogPath('change\nlog'),
    false,
    'should return `false` if the path doesn\'t look like a CHANGELOG file.'
  );

  t.strictEqual(
    isChangelogPath(path.normalize('dir/changelog/')),
    false,
    'should return `false` if the path looks like a directory.'
  );

  t.strictEqual(
    isChangelogPath(''),
    false,
    'should return `false` if it takes an empty string.'
  );

  t.throws(
    () => isChangelogPath(1),
    new TypeError('1 is not a string. Expected a file path.'),
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => isChangelogPath(),
    new TypeError('undefined is not a string. Expected a file path.'),
    'should throw a type error when it takes no arguments.'
  );
});

tap.test('isChangelogPath.posix', t => {
  t.plan(2);

  t.strictEqual(isChangelogPath.posix.name, 'isChangelogPathPosix', 'should have a function name.');

  t.strictEqual(
    isChangelogPath.posix('dir\\changelog'),
    false,
    'should always treat the path in a posix compatible way.'
  );
});

tap.test('isChangelogPath.win32', t => {
  t.plan(2);

  t.strictEqual(isChangelogPath.win32.name, 'isChangelogPathWin32', 'should have a function name.');

  t.strictEqual(
    isChangelogPath.win32('dir\\changelog'),
    true,
    'should always treat the path in a win32 compatible way.'
  );
});
