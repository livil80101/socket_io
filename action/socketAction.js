module.exports = function (server) {
    var socketio = require("socket.io");

    var io = socketio.listen(server);

    io.sockets.on("connection", function (socket) {
        io.emit("oneJoin", {});

        socket.on("call", function (data) {
            socket.emit("echo", data);
        });
    });

    return io;
};