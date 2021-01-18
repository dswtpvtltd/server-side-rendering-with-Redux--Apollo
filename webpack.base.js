const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.css'],//add '.css' "root": __dirname
    },
    //Tell the webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react", //without this spread operator does not work
                        ["@babel/preset-env", {
                            targets: { browsers: 
                                [">0.25%",
                                "not ie 11",
                                "not op_mini all"] 
                            }
                        }]
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/,
                include: path.appSrc,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader'),
                    require.resolve('postcss-loader')
                ]
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    }
}