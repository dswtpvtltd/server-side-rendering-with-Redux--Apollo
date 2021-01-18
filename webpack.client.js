const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    //tell the webpack root file of our server application
    entry: "./src/client/client.js",

    //Tell the webpack where to store the output generated files

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public") //__dirname current working directory
    }
}

module.exports = merge(baseConfig, config);