var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');


module.exports = {
    entry: {
       'vendor' : './vendor.js',
       'app' : './main.js'
    },
    resolve: {
      extensions: ['.js','.jsx']  
    },
    output: {
        path: '/',
        filename: 'dist.js'
    },
    devServer: {
        inline: true,
        port: 3001
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname,'app'),
                loader: 'style-loader!css-loader?root=.'
            },
            {
                test: /\.(eot|svg|woff|ttf|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name : ['app','vendor']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery" : 'jquery'
      })
    ]
};

