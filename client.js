var net = require("net");
var HOST = "127.0.0.1";
var PORT = 6969;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var employee = new net.Socket();

employee.connect(PORT, HOST, function () {
  employee.write("calculate");
});

employee.on("data", function (data) {
  console.log(data.toString());
  readline.question("Input number: ", (input) => {
    employee.write(input);
  });
});