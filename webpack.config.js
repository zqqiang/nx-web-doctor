"use strict";

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "#cheap-source-map",
  // entry: path.resolve(__dirname, "client.js"),
  entry: ["./client.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".marko"],
    modules: ["./", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "marko-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        loader: "file-loader",
        query: {
          name: "img/[name].[ext]",
          publicPath: "/"
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ["popper.js", "default"]
    })
  ]
};
