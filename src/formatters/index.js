import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (result, format) => {
  switch (format) {
    case 'stylish':
      return stylish(result);
    case 'plain':
      return plain(result);
    case 'json':
      return json(result);
    default:
      throw Error(`incorrect format "${format}"`);
  }
};

export default formatter;