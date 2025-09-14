const convertAstToObject = (ast) => {
  const result = {}

  ast.forEach((node) => {
    if (node.state === 'nested' && node.children) {
      result[node.key] = convertAstToObject(node.children)
    } else if (node.state === 'added' || node.state === 'unchanged') {
      result[node.key] = node.value
    } else if (node.state === 'changed') {
      result[node.key] = node.newValue
    }
  })

  return result
}

const json = (tree) => {
  const mergedObject = convertAstToObject(tree)
  return JSON.stringify(mergedObject, null, 2)
}

export default json
