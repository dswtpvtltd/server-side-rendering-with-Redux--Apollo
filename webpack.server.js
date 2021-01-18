const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform the erbpack that we are building a bundle
    // for nodeJs, rather than browser
    target: 'node',

    //tell the webpack root file of our server application
    entry: "./src/server.js",

    //Tell the webpack where to store the output generated files

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build") //__dirname current working directory
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);