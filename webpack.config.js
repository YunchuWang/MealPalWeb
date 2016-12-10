//var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = {
   entry: './js/main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8088
   },
	
   module: {
      loaders: [
         {
             test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['react']
              }
         },
          {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
          },
//          {
//              test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//              loader: 'url?limit=8192'
//          },
          {
              test: /\.js$/,
              loader: 'babel'
          },
//          {
//            test: /\.css$/,
//            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
          }
      ]
//      plugins: [
//        new ExtractTextPlugin('bundle.css')
//      ]
   }
}

module.exports = config;