import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { genDiff } from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file1Path = join(__dirname, '../__fixtures__/file1.json');
const file2Path = join(__dirname, '../__fixtures__/file2.json');

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
