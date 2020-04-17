const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~pages": path.resolve(__dirname, "./src/pages"),
        "~api": path.resolve(__dirname, "./src/api"),
        "~utils": path.resolve(__dirname, "./src/utils"),
        assets: path.resolve(__dirname, "./src/assets")
      }
    }
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
    // host: "172.16.0.28",//王敏
    port: 8100
  },
  productionSourceMap: false
};
