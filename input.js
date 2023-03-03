const { up, down, right, left } = require('./constants');

// Stores the active TCP connection object.
let connection;


const msg = "Say: ";
const hello = "Yeo!";
const banter = "You're not so great at this!";
const win = "Haha I'm gonna win!";


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  }); //event listener which will use the function handleUserInput which runs when you revieve input from your keyboard
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
    setInterval(() => {
      connection.write(key);
    }, 1000);
  };
  if (key === '\u0003') {
    stdout.write("Game Over\n");
    process.exit();
  }
  if (key === 'w') {
    clearInterval(interval);// clear interval clears the interval set by set interval so that the snake does not get stuck going in the same direction and changes direction with each input
    interval(up);
  }
  if (key === 'a') {
    clearInterval(interval);
    interval(left);
  }
  if (key === 's') {
    clearInterval(interval);
    interval(down);
  }
  if (key === 'd') {
    clearInterval(interval);
    interval(right);
  }
  if (key === "1") {
    connection.write(msg + hello);
  }
  if (key === "2") {
    connection.write(msg + banter);
  }
  if (key === '3') {
    connection.write(msg + win);
  }
};

// setupInput();

module.exports = {
  setupInput
};