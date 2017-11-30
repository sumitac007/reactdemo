var HTMLWebPackPlugin = require('html-webpack-plugin');
var config = {
    entry: './main.js',
    output: {
        path: '/',
        filename: 'dist.js'
    },
    devServer: {
        inline: true,
        port: 3001
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './index.html'
        }),
    ]
};


module.exports = config;