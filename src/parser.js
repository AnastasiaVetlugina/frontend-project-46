import fs from 'fs';
import path from 'path';

export const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const ext = path.extname(filepath).toLowerCase();

  if (ext === '.json') {
    return JSON.parse(data);
  }
  throw new Error(`Unsupported file format: '${ext}'`);
};
