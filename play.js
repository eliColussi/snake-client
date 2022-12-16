const {connect} = require("./client");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
}; 

const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  }
};