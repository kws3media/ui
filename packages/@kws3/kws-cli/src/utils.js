const child_process = require('child_process');
const {readdirSync} = require('sander');

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

function checkDirIsEmpty(dir) {
  try {
    const files = readdirSync(dir);
    if (files.length > 0) {
      throw new Error(`Destination directory is not empty, aborting.`);
    }
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
}

function niceRepoOptions(manifest){
  var out = [];
  Object.entries(manifest).forEach(([k, v]) => {
    var st = '* ' + k;
    if(v && typeof v.name != 'undefined'){
      st += ' -> ' + v.name;
    }
    if(v && typeof v.description != 'undefined'){
      st += ' \n  ' + v.description;
    }
    out.push(st);
  });

  return out;
}

function getKeyFromNiceOption(option){
  return option.split("\n")[0].split('->')[0].replace('*', '').trim();
}

function getRepoUrlFromOption(option, manifest){
  var k = getKeyFromNiceOption(option);
  return manifest[k] ? manifest[k].repo : null;
}

module.exports = {
  exec,
  checkDirIsEmpty,
  niceRepoOptions,
  getKeyFromNiceOption,
  getRepoUrlFromOption
};