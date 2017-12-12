var config = {
    entry: './index.js', // entry point
    output: {
          filename: 'bundle.js', // place where bundled app will be served
       },
    devServer: {
          inline: true, // autorefresh
          port: 8000 // development port server
       },
    module: {
          loaders: [
             {
                test: /\.jsx?$/, // search for js files 
                exclude: /node_modules/,
                loader: 'babel-loader',
    query: {
                presets: ['es2015', 'react'] // use es2015 and react
             }
          }
       ]
    }
 }
 module.exports = config;