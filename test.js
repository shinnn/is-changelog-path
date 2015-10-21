'use strong';

const path = require('path');

const isChangelogPath = require('.');
const tap = require('tap');

tap.test('isChangelogPath', t => {
  t.plan(8);

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
