'use strict';


const isProduction = process.env.NODE_ENV === 'production';
let port = isProduction ? process.env.PORT : 3000;
if (!port) port = 3000;

const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.resolve(__dirname, './')));




const http = require('http').Server(app); // eslint-disable-line new-cap
const io = require('socket.io')(http);

// register socketevents
//socketEvents(io);

io.on('connection', function(socket){
    console.log("client connected");

    socket.on('new message', function(data){
      console.log('new message coming',data.msg,data.boxId);
      // to broadcast everywhere
      //io.sockets.emit('new bc message',data)
      // to broadcast only to specific client.
      socket.emit('new bc message', data)
      //socket.broadcast.emit('new bc message');
    })
  })

http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

if (!isProduction) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('./webpack.config.js');

  new WebpackDevServer(webpack(webpackConfig), {
      contentBase: "./",
      colors: true,
      inline: true,
      historyApiFallback: true,
      hot:true,
      proxy: { '*': 'http://localhost:3000' },
  }).listen(8080, 'localhost', err => {
    if (err) console.log(err);
    console.log('Webpack Dev Server listening at 8080');
  });
}
