// Readline lets us tap into the process events
const readline = require('readline');
const { io } = require('socket.io-client');
const socket = io("ws://localhost:3200");


// Allows us to listen for events from stdin
readline.emitKeypressEvents(process.stdin);

// Raw mode gets rid of standard keypress events and other
// functionality Node.js adds by default
process.stdin.setRawMode(true);


// Start the keypress listener for the process
process.stdin.on('keypress', (str, key) => {

    // "Raw" mode so we must do our own kill switch
    if (key.sequence === '\u0003') {
        process.exit();
    }
    socket.emit("key", key);
    console.log(key);
});

socket.on("connection", (...args) => {
    console.log(args);
});