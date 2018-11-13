/* eslint-disable no-var,prefer-template,vars-on-top,func-style */

const assign = require('lodash.assign');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    BUILD: path.join(__dirname, 'build'),
    LIB: path.join(__dirname, 'lib'),
    SOURCE: path.join(__dirname, 'src')
};

const extractSass = new ExtractTextPlugin('react-components.css');

const baseConfig = {
    entry: {
        main: [path.join(PATHS.SOURCE, 'index.js')],
        'style-guide': [path.join(PATHS.SOURCE, 'style-guide.js')]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                enforce: 'pre',
                loader: 'import-glob-loader'
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ],
        noParse: [/sinon\.js/]
    },
    resolve: {
        alias: {
            lib: PATHS.LIB,
            sinon: 'sinon/pkg/sinon',
            src: PATHS.SOURCE
        },
        extensions: ['.js']
    },
    output: {
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js',
        path: PATHS.BUILD,
        publicPath: '/frontend-react-components/',
        libraryTarget: 'umd'
    },
    plugins: [
        extractSass,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            Promise: 'bluebird'
        }),
        new webpack.ProvidePlugin({
            'Object.assign': 'lodash.assign'
        })
    ]
};

const prodConfig = assign({}, baseConfig, {
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],
    module: assign({}, baseConfig.module, {
        rules: baseConfig.module.rules.concat({
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        })
    })
});

const devConfig = assign({}, baseConfig, {
    devtool: '#source-map',
    module: assign({}, baseConfig.module, {
        rules: baseConfig.module.rules.concat({
            test: /\.js$/,
            exclude: [/node_modules/, path.join(PATHS.SOURCE, 'playground-fixture.js')],
            loader: 'babel-loader',
            options: { cacheDirectory: true }
        })
    }),
    entry: {
        main: [path.join(PATHS.SOURCE, 'playground.js')],
        'style-guide': baseConfig.entry['style-guide']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ].concat(baseConfig.plugins)
});

const testConfig = assign({}, baseConfig, {
    devtool: (process.env.SOURCE_MAPS) ? 'inline-source-map' : '',
    module: assign({}, baseConfig.module, {
        rules: baseConfig.module.rules.concat({
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { cacheDirectory: true }
        })
    }),
    resolve: assign({}, baseConfig.resolve, {
        alias: assign({}, baseConfig.resolve.alias, {
            fs: 'lib/test-helpers/fs-mock'
        })
    }),
    plugins: [
        extractSass,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            Promise: 'bluebird'
        }),
        // PhantomJS doesn't support Object.assign so provide a polyfill.
        new webpack.ProvidePlugin({
            'Object.assign': 'lodash.assign'
        })
    ]
});

module.exports = prodConfig;

if (process.env.NODE_ENV !== 'production') {
    module.exports.devConfig = devConfig;
    module.exports.testConfig = testConfig;
}
