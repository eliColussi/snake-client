const { createConnection } = require("net");

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
}; 

const handleUserInput = function(data) {
  if (data === "\u0003") {
    process.exit();
  }
  if (data === "w" || data === "W") {
    connection.write("Move: up");
  }
  if (data === "a" || data === "A") {
    connection.write("Move: left");  
  }
  if (data === "s" || data === "S") {
    connection.write("Move: down");
  }
  if (data === "d" || data === "D") {
    connection.write("Move: right");
  }

};



module.exports = {setupInput};