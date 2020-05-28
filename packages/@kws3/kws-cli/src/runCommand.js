const {Select, Confirm, Input, Form, Snippet} = require('enquirer');
const chalk = require('chalk');
const {exec, asyncForEach} = require('./utils.js');


async function collectAndRun(cmd, name){
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

  if(cmd.Input){
    const prompt = new Input(cmd.Input);
    var result = await prompt.run();
    console.log(result);
    return;
  }

  console.log(chalk.bold.green.underline('Running ' + name));
  if(description){
    console.log(chalk.bold.green(description));
  }

  await exec(_cmd);
}

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

  var allow_running = true;
  if(cmd.skippable){
    const prompt = new Confirm({
      name: name,
      message: 'Run '+name+'? ' + (description ? `(${description})` : '')
    });

    allow_running = await prompt.run();
  }

  if(allow_running){
    await collectAndRun(cmd, name)
  }

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