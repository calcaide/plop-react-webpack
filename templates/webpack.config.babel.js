// Dependencies
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import validator from 'webpack-validator';

// Dev-server configuration
const SRV_HOST = '0.0.0.0';
const SRV_PORT = 8080;

// Configuration
const CONFIG = {
    target: 'web',
    entry: [
        './app/app.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://'+SRV_HOST+':'+SRV_PORT
    ],
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        host: SRV_HOST,
        port: SRV_PORT,
        hot: true
    }
};

// Should add validator
export default validator(CONFIG);