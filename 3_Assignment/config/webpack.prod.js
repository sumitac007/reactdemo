var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var webpack = require('webpack');

const path = require('path');

const rootDir = path.resolve(__dirname,'..');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]

    
});