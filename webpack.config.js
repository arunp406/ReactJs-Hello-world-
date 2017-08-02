var HTMLWebpackPlugin= require('html-webpack-plugin');
var webpack = require('webpack');
var HTMLWebpackPluginConfig= new HTMLWebpackPlugin({
    template:__dirname+ '/app/index.html',
    filename:'index.html',
    inject:'body'
})

module.exports={
    devtool:'#eval-source-map',
    entry: __dirname + '/app/index.js',
    module:{
        loaders:[
            {test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{presets:['react','es2015']}
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }
        ]
    },
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },
    plugins: [HTMLWebpackPluginConfig]

}