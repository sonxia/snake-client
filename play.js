const {connect} = require("./client.js")

client.setEncoding("utf8"); // interpret data as text
client.on("data", (data) => {
  console.log("Message from client: ", data);
}); 

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  const stdout = process.stdout;
  if ("data" === '\u0003') {
    stdout.write("Game Over\n");
    process.exit();
  }
};

setupInput();
