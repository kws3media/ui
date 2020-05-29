const path = require('path');
const child_process = require('child_process');
const {readdirSync, existsSync} = require('sander');

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

function loadLocalConfig(filename, withHidden){
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
      processed['exec'] = {
        description: 'Execute various project related commands',
        tasks: _temp
      }
    }
    if(localConfig['post-scaffold'] && withHidden){
      var _temp = Object.assign({}, localConfig['post-scaffold']);
      processed['post-scaffold'] = {
        tasks: _temp
      }
    }
    return processed;
  }
  return {};
}

function exec(command) {
  return new Promise((fulfil, reject) => {
    console.log("\n------------------------------------------");
    const cp = child_process.exec(command, (err, stdout, stderr) => {
      console.log("------------------------------------------\n");
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
  if(isObject(manifest) && !Array.isArray(manifest)){
    Object.entries(manifest).forEach(([k, v]) => {
      var st = '⇨  ' + k;
      if(v && typeof v.name != 'undefined'){
        st += ' -> ' + v.name;
      }
      if(v && typeof v.description != 'undefined'){
        st += ' \n  -- ' + v.description;
      }
      st += "\n";
      out.push(st);
    });
  }else{
    manifest.forEach((v) => {
      var st;
      if(typeof v == 'string'){
        st = '⇨  ' + v;
      }else if(typeof v.name != 'undefined'){
        st = '⇨  ' + v.name;
      }
      if(v && typeof v.description != 'undefined'){
        st += ' \n  -- ' + v.description;
      }else if(v && typeof v.message != 'undefined'){
        st += ' \n  -- ' + v.message;
      }
      st += "\n";
      out.push(st);
    });
  }


  return out;
}

function getKeyFromNiceOption(option){
  return option.split("\n")[0].split('->')[0].replace('⇨', '').trim();
}

function getValueFromNiceOption(option, value_key, manifest){
  var k = getKeyFromNiceOption(option);
  if(manifest[k]){
    if(value_key && typeof manifest[k][value_key] != 'undefined'){
      return manifest[k][value_key];
    }else{
      return manifest[k];
    }
  }
  return null;
}

function isObject(obj){
  return typeof obj === 'object' && obj !== null;
}

module.exports = {
  asyncForEach,
  exec,
  checkDirIsEmpty,
  loadLocalConfig,
  niceOptions,
  getKeyFromNiceOption,
  getValueFromNiceOption,
  isObject
};