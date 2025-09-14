import _ from 'lodash'

const makeIndent = (depth = 0, marker = null) => {
  const indentStep = 4
  const actualIndent = ' '.repeat(depth * indentStep)
  return marker === null ? actualIndent : `${actualIndent.slice(2)}${marker} `
}

const formatValue = (values, depth) => {
  if (_.isObject(values)) {
    const objectIndent = makeIndent(depth + 1)
    const objectContent = Object.entries(values)
      .map(([key, value]) => `${objectIndent}${key}: ${formatValue(value, depth + 1)}`)
      .join('\n')
    return `{\n${objectContent}\n${makeIndent(depth)}}`
  }
  return `${values}`
}

const renderStylish = content => {
  const iter = (node, depth) => {
    const indent = makeIndent(depth)

    switch (node.state) {
      case 'added': {
        const lineIndent = makeIndent(depth, '+')
        const formattedValue = formatValue(node.value, depth)
        return `${lineIndent}${node.key}: ${formattedValue}`
      }
      case 'deleted': {
        const lineIndent = makeIndent(depth, '-')
        const formattedValue = formatValue(node.value, depth)
        return `${lineIndent}${node.key}: ${formattedValue}`
      }
      case 'unchanged': {
        const formattedValue = formatValue(node.value, depth)
        return `${indent}${node.key}: ${formattedValue}`
      }
      case 'changed': {
        const delIndent = makeIndent(depth, '-')
        const addIndent = makeIndent(depth, '+')
        const formattedOldValue = formatValue(node.oldValue, depth)
        const formattedNewValue = formatValue(node.newValue, depth)
        return [
          `${delIndent}${node.key}: ${formattedOldValue}`,
          `${addIndent}${node.key}: ${formattedNewValue}`,
        ]
      }
      default: {
        const innerTree = node.children.flatMap(child => iter(child, depth + 1)).join('\n')
        return `${indent}${node.key}: {\n${innerTree}\n${indent}}`
      }
    }
  }

  const tree = content.flatMap(node => iter(node, 1)).join('\n')
  return `{\n${tree}\n${makeIndent()}}`
}

export default renderStylish
