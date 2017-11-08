const environment = require('./environment')
const DashboardPlugin = require('webpack-dashboard/plugin')

environment.plugins.set(
  'Dashboard',
  new DashboardPlugin()
)

environment.loaders.set(
  'markdown', {
    test: /\.md$/,
    use: [
      {
        loader: "html-loader"
      },
      {
        loader: "markdown-loader",
        options: {
          /* your options here */
        }
      }
    ]
  }
)

module.exports = environment.toWebpackConfig()

// Alternative approach:
// const customConfig = {
//   plugins: [
//     new DashboardPlugin()
//   ]
// }
// module.exports = {
//   ...environment.toWebpackConfig(),
//   ...customConfig
// }
