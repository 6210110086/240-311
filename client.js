var net = require("net");
var HOST = "127.0.0.1";
var PORT = 6969;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var client = new net.Socket();

client.connect(PORT, HOST, function () {
  client.write("calculate");
});

client.on("data", function (data) {
  console.log(data.toString());
  readline.question("Input number: ", (input) => {
    client.write(input);
  });
});