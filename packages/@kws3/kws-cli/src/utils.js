const path = require('path');
const child_process = require('child_process');
const {readdirSync, existsSync} = require('sander');

function loadLocalConfig(filename){
  var filename = filename || 'kws-cli.json',
  fullpath = path.join(process.cwd(), filename);
  if(existsSync(fullpath)){
    const localConfig = require(fullpath);
    var processed = {};
    if(localConfig.generators){
      var _temp = Object.assign({}, localConfig.generators);
      processed.generate = {
        description: 'Generate various project components',
        tasks: _temp
      }
    }
    if(localConfig.scripts){
      var _temp = Object.assign({}, localConfig.scripts);
      processed['execute'] = {
        description: 'Execute various project related commands',
        tasks: _temp
      }
    }
    return processed;
  }
  return {};
}

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

function niceOptions(manifest){
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

function getValueFromNiceOption(option, value_key, manifest){
  var k = getKeyFromNiceOption(option);
  if(manifest[k]){
    if(value_key && manifest[k][value_key]){
      return manifest[k][value_key];
    }else{
      return manifest[k];
    }
  }
  return null;
}

module.exports = {
  exec,
  checkDirIsEmpty,
  loadLocalConfig,
  niceOptions,
  getKeyFromNiceOption,
  getValueFromNiceOption
};