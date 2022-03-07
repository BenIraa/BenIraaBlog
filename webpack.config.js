const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  devServer: {
    contentBase: "./public",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    host: !process.argv.join(" ").includes("--sw") && require("ip").address(),
    disableHostCheck: true,
    open: true,
    hot: false,
    port,
    proxy: {
      "/api": {
        target: "https://live.server.domain.cloud",
        secure: false,
        changeOrigin: true,
        withCredentials: true,
      }
    }
  },
}

