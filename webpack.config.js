const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            sinon: 'sinon/pkg/sinon.js',
            // VTUT: '@vue/test-utils/dist/vue-test-utils.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
// const path = require('path')
// require("babel-polyfill")

// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// const environment = process.env.NODE_ENV
//     ? './resources/assets/js/environment/environment.prod.js'
//     : './resources/assets/js/environment/environment.dev.js'

// module.exports = {
//     mode: 'development',
//     plugins: [
//         new VueLoaderPlugin()
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             },
//             {
//                 test: /\.m?js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['babel-preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             },
//             {
//                 test: /\.(png|jpg|gif)$/,
//                 loader: 'file-loader'
//             }
//         ]
//     },
//     resolve: {
//         alias: {
//             environment: path.resolve(__dirname, environment),
//             sinon: 'sinon/pkg/sinon.js'
//         }
//     }
// }