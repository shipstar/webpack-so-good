const environment = require('./environment')
const DashboardPlugin = require('webpack-dashboard/plugin')

environment.plugins.set(
  'Dashboard',
  new DashboardPlugin()
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
