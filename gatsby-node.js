const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allDatoCmsPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running Post select create page GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  result.data.allDatoCmsPost.edges.forEach(({ node:work }) => {
    createPage({
      path: `posts/${work.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: work.slug,
      },
    });
  });
  

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}


