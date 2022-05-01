
const { Server } = require('socket.io');
const io = new Server(3200);

io.on("connection", (socket) => {
    // send a message to the client
    socket.emit("connection", "Hello from the server!");

    // receive a message from the client
    socket.on("key", (args) => {
        console.log(args.sequence);
    });
});

process.on('SIGINT', () => {
    console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
    process.exit();
});