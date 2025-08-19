const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  port: 9000,
  open: true,
},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }, // resimleri dist/assets içine kopyalar
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}
      
    ],
  },
};
