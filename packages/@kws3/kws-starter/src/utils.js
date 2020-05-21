const child_process = require('child_process');

function exec(command) {
  return new Promise((fulfil, reject) => {
    const cp = child_process.exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }

      fulfil({ stdout, stderr });
    });
    cp.stdout.on('data', function(data) {
      process.stdout.write(data);
    });
    cp.stderr.on('data', function(data) {
      process.stdout.write(data);
    });
  });
}

module.exports = {exec};