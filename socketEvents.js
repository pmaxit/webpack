module.exports = function(io){

	io.on('connection', function(socket){
		console.log("client connected");

		socket.on('new message', function(msg){
			socket.broadcast.emit('new bc message',msg);
		})
	})

}