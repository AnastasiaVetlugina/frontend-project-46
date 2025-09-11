import _ from 'lodash';

export const genDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const lines = keys.flatMap((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!_.has(obj1, key)) {
      return [`  + ${key}: ${JSON.stringify(val2)}`];
    }
    if (!_.has(obj2, key)) {
      return [`  - ${key}: ${JSON.stringify(val1)}`];
    }
    if (_.isEqual(val1, val2)) {
      return [`    ${key}: ${JSON.stringify(val1)}`];
    }
    return [
      `  - ${key}: ${JSON.stringify(val1)}`,
      `  + ${key}: ${JSON.stringify(val2)}`,
    ];
  });

  return `{\n${lines.join('\n')}\n}`;
};
