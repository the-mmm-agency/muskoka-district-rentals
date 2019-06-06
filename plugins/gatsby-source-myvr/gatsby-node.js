const { createRemoteFileNode } = require('gatsby-source-filesystem')
const promiseUtils = require('blend-promise-utils')

const myvr = require('./dist/myvr')

exports.sourceNodes = async (
  { actions: { createNode, createNodeField }, createNodeId, store, cache },
  { token }
) => {
  myvr.init(token)
  const properties = await myvr.properties({ limit: 1000 })
  console.log(properties)
  await promiseUtils.map(properties, async property => {
    const propertyFull = await myvr.property(property.key)
    const node = await createNode(propertyFull)
    console.log(node)
    if (node.photos) {
      const photoNodes = promiseUtils.map(node.photos, async image =>
        createRemoteFileNode({
          url: `https:${image.largeUrl}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
      )
      createNodeField({
        node,
        name: 'images',
        value: photoNodes,
      })
    }
  })
  return
}
