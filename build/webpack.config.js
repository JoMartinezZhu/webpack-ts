const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = path.join(__dirname, "..", "src");
const enrtyPath = path.join(srcPath, "index.ts");
const distPath = path.join(__dirname, "..", "dist");
const temTplPath = path.join(__dirname, "..", "index.html");

module.exports = {
  entry: [enrtyPath],
  output: {
    path: distPath,
    filename: "main.js"
  },
  resolve: {
    // 自动解析一下拓展，当要引入src/index.ts的时候，只需要写src/index即可
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    contentBase: distPath,
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8090
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: temTplPath
    })
  ]
};
