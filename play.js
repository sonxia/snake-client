const { connect } = require("./client");
const { setupInput } = require("./input");

const connection = connect(); // the object returned by connect should be passed into setupInput

console.log("Connecting ...");

setupInput(connection);


