const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "remoteEntry.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfDrawer",
      filename: "dist/remoteEntry.js",
      remotes: {
        mfVideos: "mfVideos@http://localhost:9001/dist/remoteEntry.js",
      },
      exposes: {
        "./storeDrawer": "./src/store/drawer.store.ts",
      },
    }),
    new Dotenv({
      path: "./.env",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
  ],
};
