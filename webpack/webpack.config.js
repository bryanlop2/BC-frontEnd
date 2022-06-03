const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    mode: 'development',
    entry: {
        index: './src/index.js',
        //another: './src/indexOtro.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};