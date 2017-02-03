var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');


var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "app");

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        mainPath
    ],
    output: {
        path: buildPath,
        filename: "bundle.js",
        publicPath: "/build/"
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: "eslint-loader",
                exclude: [nodeModulesPath]
            },
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                exclude: [nodeModulesPath],
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.sass$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;