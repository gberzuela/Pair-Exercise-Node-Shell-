const { pwd } = require('./pwd');
const { ls } = require('./ls');
const { cat } = require('./cat');
const { curl } = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim().split(' ');

  // curl *link (https://www.google.com)
  // Reads link and returns HTML/CSS in text format

  if (cmd.length === 1) {
    if (cmd[0] === 'pwd') {
      pwd();
    } else if (cmd[0] === 'ls') {
      ls();
    }
    process.stdout.write('You typed: ' + cmd);
  } else if (cmd[0] === 'cat') {
    cat(cmd[1]);
  } else if (cmd[0] === 'curl') {
    curl(cmd[1]);
  }

  process.stdout.write('\nprompt > ');
});

