const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'pokemon.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: [/\.(c|sc|sa)ss$/, /\.html$/i],
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
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CopyPlugin({
            patterns: [
              {
                context: path.resolve(__dirname, "dist"),
                from: "./src/pokemon.html",
              },
            ],
          }),
          
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new HtmlMinimizerPlugin(),
        ],
      },
}