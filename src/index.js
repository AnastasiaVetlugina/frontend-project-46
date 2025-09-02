import { readFile, parse } from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  
  const obj1 = parse(data1, 'json');
  const obj2 = parse(data2, 'json');
  
  return [obj1, obj2];
};

export default genDiff;