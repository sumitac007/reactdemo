var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

const path = require('path');

const rootDir = path.resolve(__dirname);

module.exports = webpackMerge(commonConfig,{
    output: {
        path: path.resolve(rootDir,'dist'),
        publicPath: 'http://localhost:3001/',
        filename: '[name]=js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        inline:true,
        port: 3001,
        historyApiFallback: true,
        stats: 'minimal'
    }
});