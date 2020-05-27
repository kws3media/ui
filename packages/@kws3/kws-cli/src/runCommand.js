const chalk = require('chalk');
const {exec, asyncForEach} = require('./utils.js');


async function runSingle(cmd, name){
  var _cmd = null,
  name = name || null;
  description = null;
  if(typeof cmd == 'string'){
    _cmd = cmd;
    name = cmd;
  }else if(cmd.command){
    _cmd = cmd.command;
    name = cmd.name || name || _cmd;
    description = cmd.description || null;
  }

  console.log(chalk.bold.green.underline('Running ' + name));
  if(description){
    console.log(chalk.bold.green(description));
  }

  await exec(_cmd);
}

async function runAll(cmds){
  await asyncForEach(
    Object.entries(cmds),
    async ([k, el]) => {
      await runSingle(el, k)
    }
  );
}


module.exports = {runSingle, runAll}