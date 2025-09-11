import { genDiff } from '../src/gendiff.js';

test('genDiff outputs correct diff for flat objects', () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 20, d: 4 };
  const result = genDiff(obj1, obj2);
  const expected = `{
    a: 1
  - b: 2
  + b: 20
  - c: 3
  + d: 4
}`;

  expect(result.trim()).toBe(expected.trim());
});
