var config = {
  entry: './src/js/main.js',

 output: {
    path:'./dist/js',
    filename: 'index.js'
 },

 devServer: {
    inline: true,
    port: 8080
 },

 module: {
    loaders: [
       {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react', 'stage-2'],
            plugins: ['transform-decorators-legacy']
          }
       }
    ]
 }
};

module.exports = config;
