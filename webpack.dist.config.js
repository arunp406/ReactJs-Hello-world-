var HTMLWebpackPlugin= require('html-webpack-plugin');
var webpack = require('webpack');
var HTMLWebpackPluginConfig= new HTMLWebpackPlugin({
    template:__dirname+ '/app/index.html',
    filename:'index.html',
    inject:'body'
})

module.exports={
    entry: __dirname + '/app/index.js',
    module:{
        loaders:[
            {test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{presets:['react','es2015']}
            }
        ]
    },
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },
    plugins: [HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            }
        })
    ]

}