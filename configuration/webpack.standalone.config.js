const webpack = require('webpack');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const configUtils = require('./configUtils');

/**
 * Contains logic necessary for running locally without mons cookie overrides.
 * Points to a full html document.
 */
module.exports = function(env) {
    return merge(baseConfig, {
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/standalone.template.html',
                filename: 'index.html',
            }),
            new webpack.DefinePlugin({
                SERVER_MODE: JSON.stringify({mode: 'standalone'})
            }),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }),
        ]
    });
};
