var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = function() {
    return ({
        //ontext:  path.join(__dirname, "src"),
        devtool: debug ? "inline-sourcemap" : false,
        entry: {
            app: ["./src/js/client.js"]
        },

        devServer: {
            contentBase: './src',
            port: 8003,
            //host:"10.93.17.59",
            publicPath: "/",
            historyApiFallback: true

       },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0',['env', { 'targets': { 'node': 4 } }]],
                        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties','lodash']
                    }
                }
            ]
        },

        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: "/build/",
            filename: "client.min.js"
        },
        plugins: debug ? [] : [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
        ]
    });
}