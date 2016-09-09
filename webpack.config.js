const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'cvapp.bundle.js',
    },
   module: {
       loaders: [{
           test: /\.js$/,
           loader: 'babel-loader',
           exclude: /node_modules/,
           query: {
               presets: ['es2015'],
           },
           progress: true,
        },
        {
            test: /\.css$/, loader: "style!css"
        },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
};