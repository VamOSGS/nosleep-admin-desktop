const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const port = 1337;
const extractLess = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        './app/js/index.jsx'
    ],
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
        extensions: ['.js', '.jsx', '.json', '.css'],
    },
    plugins: [
        extractLess,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
        port,
        inline: true,
        progress: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, './build')
    }
}