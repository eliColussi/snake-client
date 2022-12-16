const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // establishes a connection with the game server

  conn.on("connect", () => {
    console.log("succesfully connected to the game server"); 
    conn.write("Name: Eli"); //give snake my name, i am the snake
  });

  conn.on('data', (data) => {
    console.log(data.toString()); 
    conn.end();
  });

  conn.on("end", () => {
    console.log("It's got a sharp tongue, this server!"); //message present when user fails or exits game
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};


module.exports = {connect};

