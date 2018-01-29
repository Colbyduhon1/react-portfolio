var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


const compiler = webpack(config);
const devServerOptions = Object.assign({}, config.devServer, {
  disableHostCheck: true,
  publicPath: config.output.publicPath
	})

const server = new WebpackDevServer(compiler, devServerOptions);




  server.listen(process.env.PORT || 5000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });