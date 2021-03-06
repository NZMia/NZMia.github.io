const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const project = require('./project.config');

const envDev = project.env === 'development';
const devtool = project.sourceMap ? 'cheap-source-map' : false;

const SRC_DIR = path.join(project.basePath, project.srcDir);

const config = {

    mode: project.env,

    entry:{
        main: [SRC_DIR + '/main.js'],
    },

    output: {
        path: path.resolve(project.basePath, project.outDir),
        filename: envDev ? '[name].js' : '[name].[chunkhash:5].js',
        publicPath: project.publicPath
    },

    devtool: devtool,

    resolve: {
        modules: [
            project.srcDir,
            'node_modules'
        ],

        alias: {
            '@': SRC_DIR,
            '@assets': path.resolve(project.basePath, project.srcDir, 'assets')
        },

        extensions: ['*','.js', '.jsx', '.json', '.less', '.scss', '.css']
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use : {
                    loader: 'babel-loader?cacheDirectory'
                },
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: devtool,
                            publicPath: project.publicPath
                        }
                    },
                    {
                        loader : 'css-loader',
                        options: {
                            minimize: envDev? false : true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(project.basePath, 'postcss.config.js')
                            }
                        }
                    },
                    {
                        loader: 'less-loader"'
                    }
                ],
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use :[

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: project.publicPath
                        }
                    },
                    {
                        loader : 'css-loader',
                        options: {
                            minimize: envDev? false : true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(project.basePath, 'postcss.config.js')
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options : {
                        limit: 8192,
                        name: 'images/[name].[hash:5].[ext]'
                    }
                }]
            }
        ]
    },

    optimization: {
        sideEffects: false,
        splitChunks: {
            chunks     :'all',
            minSize    : 30000,
            minChunks  : 1,
            cacheGroups: {
                commons: {
                    name    : 'thirdParty',
                    test    : /[\\/]node_modules[\\/]/,
                    chunks  : 'initial',
                    priority: -10,
                    enforce : true
                },
                styles: {
                    name   : 'main',
                    test   : /[\\/]main.scss[\\/]/,
                    chunks : 'all',
                    enforce: true
                }
            }
        }
    },

    performance: {
        hints: false
    },

    devServer: {
        historyApiFallback: true,
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context : project.basePath,
            manifest: path.resolve(project.basePath, '../dll', 'manifest.json'),

        }),

        new MiniCssExtractPlugin({
            filename: envDev ? '[name].css' : '[name].[hash:5].css',
            chunkFilename: envDev ? '[id].css' : '[id].[hash:5].css',
        }),

        new HtmlWebpackPlugin({
            template : 'src/index.html',
            inject   : true,
            favicon  : path.resolve('favicon.ico'),
            minify   : {
                collapseWhitespace: envDev? false : true,
                ignoreCustomComments: envDev ? false : [ /^!/ ]
            }
        }),

        new AddAssetHtmlPlugin({
            filepath: path.resolve(project.basePath, '../dll/*.dll.js'),
            includeSourcemap: false
        })
    ]
}

module.exports = config;
