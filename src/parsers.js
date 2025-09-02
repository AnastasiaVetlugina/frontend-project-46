import fs from 'fs';
import path from 'path';

export const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

export const parse = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  throw new Error(`Unsupported format: ${format}`);
};