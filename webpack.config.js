/**
 * Created by Pradeep Kumar S on 05/10/16.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
const merge = require('webpack-merge');
const validate = require('webpack-validator');



const PATHS = {

    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    vendor:path.join(__dirname, 'vendor'),
    nodeModules: path.join(__dirname, 'node_modules')
};



const common = {

    resolve: {
        root: [PATHS.nodeModules],
        alias: {
            jquery: PATHS.vendor+"/jquery-1.10.2.min",
            underscore: PATHS.vendor+"/underscore-min",
            backbone:PATHS.vendor+"/backbone-min"
        }
    },

    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: {
        app: PATHS.app,
        vendor: ['jquery','underscore','backbone']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module:{
        loaders: [
            { test: /backbone/, loader: 'imports?underscore,jquery' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo'
        }),
        new webpack.ProvidePlugin({
            _: "underscore",
            jquery: "jquery",
            Backbone: "backbone"
        })
    ],
    resolveLoader: {
        root: PATHS.nodeModules
    }

};



var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(common, {});
        break;
    default:
        config = merge(common, {});
}

module.exports = validate(config);

