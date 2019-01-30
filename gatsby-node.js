const Promise = require('bluebird')
const path = require('path')
const get = require('lodash/get')

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve('src/templates/ProductPage.js')
    resolve(
      graphql(
        `
          {
            allMoltinProduct {
              edges {
                node {
                  originalId
                  name
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMoltinProduct.edges.forEach(edge => {
          createPage({
            path: `/product/${edge.node.name}/`,
            component: productPageTemplate,
            context: {
              originalId: edge.node.originalId,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  cache,
  store,
  createNodeId,
}) => {
  const { createNode } = actions
  let fileNode

  if (node.internal && node.internal.type === `MoltinProduct`) {
    const mainImageHref = get(node, 'includedData.main_image.link.href')

    fileNode = await createRemoteFileNode({
      url: mainImageHref,
      store,
      cache,
      createNode,
      createNodeId,
    })
    if (fileNode && fileNode.id) node.mainImage___NODE = fileNode.id
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/*'
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty', child_process: 'empty' },
  })
}
