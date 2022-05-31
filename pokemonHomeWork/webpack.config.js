const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/,
                type: 'asset/resource',
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/pokemon.html',
            filename: '[name].html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })          
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new HtmlMinimizerPlugin(),
        ],
      },
}