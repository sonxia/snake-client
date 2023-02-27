const {connect} = require("./client.js")
const { connect } = require("./client");
const { setupInput } = require("./input");

client.setEncoding("utf8"); // interpret data as text
client.on("data", (data) => {
  console.log("Message from client: ", data);
}); 

const handleUserInput = function () {
  const stdout = process.stdout;
  if ("data" === '\u0003') {
    stdout.write("Game Over\n");
    process.exit();
  }
};

console.log("Connecting ...");
connect();

setupInput();
