const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'mainProd.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                /*test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader",
                ],*/
            },
        ],
    },
}