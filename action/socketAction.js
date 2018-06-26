module.exports = function (server) {
    let socketio = require("socket.io");

    let io = socketio.listen(server);

    io.sockets.on("connection", function (socket) {
        io.emit("oneJoin", {});

        socket.on("call", function (data) {
            socket.emit("echo", data);
        });
    });

    return io;
};