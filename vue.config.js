const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin")

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 项目的主要配置文件
module.exports = {
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set("@", resolve("src"))
      .set("views", resolve("src/views"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("common", resolve("src/common"));
  },
  // configureWebpack: {
  //   // devtool: 'source-map' vscode调试vue用的
  // },
  // 开启Gzip
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
        return {
            plugins: [
                new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/,
                    threshold: 10240,
                    deleteOriginalAssets: false
                })
            ]
        }
    }

}  
};
