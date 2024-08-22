const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const configUtils = require('./configUtils');


/** Plugins that should only be added in development. */
const DEVO_PLUGINS = [];

/** Plugins that should only be added in production. */
const PROD_PLUGINS = [
    new MiniCssExtractPlugin({
        filename: configUtils.appCssFileName
    })
];

/** Plugins to run regardless of the environment. */
const ALL_PLUGINS = [
    ...(configUtils.isProdBuild ? PROD_PLUGINS : DEVO_PLUGINS),

    new ForkTsCheckerWebpackPlugin({
        // Setting to false allows TypeScript errors to be included in
        // webpack-dev-server's overlay. In substantially large projects,
        // setting this to true may reduce the time it takes to incrementally
        // build the project in development, at the cost of losing TypeScript
        // errors in the overlay. TypeScript errors will always be shown in the
        // terminal.
        async: false
    })
];

/** Optimizations to run depending on the environment. */
function getOptimizationConfig() {
    if (configUtils.isProdBuild) {
        return {
            minimizer: [
                new TerserPlugin({
                    parallel: true
                })
            ]
        };
    }

    return {};
}

/** Get the css rules to use depending on the environment. */
function getCssRules() {
    if (configUtils.isProdBuild) {
        return [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            'postcss-loader',
            'sass-loader'
        ];
    }

    // In development, style-loader is used instead of
    // MiniCssExtractPlugin so that css changes are hot reloaded.
    return ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'];
}

module.exports = {
    mode: configUtils.webpackMode,

    devtool: configUtils.webpackDevTool,

    context: path.resolve(__dirname, '..'),

    entry: configUtils.entryFile,

    output: {
        filename: configUtils.appJsFileName,
        path: configUtils.localPublishDir,
        publicPath: './'
    },

    resolve: {
        alias: {
            src: path.resolve(__dirname, '..', 'src'),
            stream: 'stream-browserify',
            https: 'agent-base',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'), 
            "assert": require.resolve("assert"),
            "url": require.resolve("url"),
            "os": require.resolve("os-browserify"),
            "buffer": require.resolve("buffer")
          }
    },

    optimization: getOptimizationConfig(),

    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        plugins: ['react-hot-loader/babel']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: getCssRules()
            },
            {
                test: /\.(png|jpe?g|gif|bmp|svg)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: ALL_PLUGINS,

    devServer: {
        progress: true,
        compress: true,
        overlay: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        open: true,
        index: './deployment/index.html',
        contentBase: "./deployment",
        port: 4321,
        historyApiFallback: {
            index:'index.html'
        },
    },

    performance: { hints: false }
};
