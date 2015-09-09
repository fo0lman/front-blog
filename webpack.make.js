'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
    var BUILD = !!options.BUILD;
    var TEST = !!options.TEST;

    var config = {};

    if (TEST) {
        config.entry = {}
    } else {
        config.entry = {
            app: './app/app.js'
        }
    }

    if (TEST) {
        config.output = {}
    } else {
        config.output = {
            path: __dirname + '/dist',
            publicPath: BUILD ? '/' : 'http://localhost:8080/',
            filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
            chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
        }
    }

    if (TEST) {
        config.devtool = 'inline-source-map';
    } else if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';
    }

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel?optional[]=runtime',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    };

    if (TEST) {
        config.module.preLoaders.push({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.test\.js$/
            ],
            loader: 'isparta-instrumenter'
        })
    }

    var cssLoader = {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'style!css?sourceMap')
    };

    if (TEST) {
        cssLoader.loader = 'null'
    }

    config.module.loaders.push(cssLoader);

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    config.plugins = [
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD || TEST
        })
    ];

    if (!TEST) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: './app/index.html',
                inject: 'body',
                minify: BUILD
            })
        )
    }

    if (BUILD) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        )
    }

    config.devServer = {
        contentBase: './dist',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };

    return config;
};