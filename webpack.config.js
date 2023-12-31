const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
        './src/content.js',
        './src/menu.js',
        './src/contact.js'
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};