var io = require("socket.io")(80);
var ss = require("socket.io-stream");
var path = require("path");
var fs = require("fs");

io.of("/user").on("connection", function (socket) {
  ss(socket).on("profile-image", function (stream, data) {
    var filename = path.basename(data.name);
    stream.pipe(fs.createWriteStream("./files/" + filename));
  });
});
