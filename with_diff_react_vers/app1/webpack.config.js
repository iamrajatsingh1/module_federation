// app1/config/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const path = require("path");
const dependencies = require("./package.json").dependencies;

dotenv.config();

module.exports = function () {
    return {
        entry: './src/index.js',
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
        plugins: [
            new DefinePlugin({
                'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || '/'),
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new ModuleFederationPlugin({
                name: 'app1',
                filename: 'remoteEntry.js',
                exposes: {
                    './App': './src/App',
                },
                shared: {
                    react: { singleton: true, eager: true, requiredVersion: dependencies["react"] },
                    'react-dom': { singleton: true, eager: true, requiredVersion: dependencies["react-dom"] },
                },
            }),
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: 'http://localhost:3001/',
        },
        devServer: {
            port: 3001,
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            hot: true,
            historyApiFallback: true,
        },
    };
};
