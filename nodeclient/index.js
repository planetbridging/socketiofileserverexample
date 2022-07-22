var io = require("socket.io-client");
var ss = require("socket.io-stream");
var fs = require("fs");

var socket = io.connect("http://localhost/user");
var stream = ss.createStream();
var filename = "ban.jpg";

ss(socket).emit("profile-image", stream, { name: filename });
fs.createReadStream(filename).pipe(stream);
