// app2/config/webpack.config.js
const { ModuleFederationPlugin } = require("webpack").container;
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const path = require("path");
const dependencies = require("./package.json").dependencies;

dotenv.config();

module.exports = function () {
  return {
    entry: "./src/index.js",
    mode: "development",

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx"],
    },

    plugins: [
      new DefinePlugin({
        "process.env.PUBLIC_URL": JSON.stringify(
          process.env.PUBLIC_URL || "/"
        ),
      }),

      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),

      new ModuleFederationPlugin({
        name: "app2",
        remotes: {
          app1: "app1@http://localhost:3001/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    ],

    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "http://localhost:3002/",
    },

    devServer: {
      port: 3002,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      hot: true,
      historyApiFallback: true,
    },
  };
};
