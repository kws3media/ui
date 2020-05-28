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
    const options = cmd.Input,
    prompt = new Input(options);

    var result = await prompt.run();
    _cmd = applyCommand(options, _cmd, result);

  }else if(cmd.Form){
    const options = injectValidation(cmd.Form),
    prompt = new Form(options);
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

function applyCommand(options, command, answer){
  if(typeof answer === 'object' && answer !== null){

  }else{
    const key = options.name,
    regex = new RegExp('\\$\\{'+key+'\\}', 'g');
    return command.replace(regex, answer);
  }
}

function injectValidation(obj){
  if(obj.validate){
    let old_validate = obj.validate;
    obj.validate = function(value){
      let ret = true;
      Object.entries(old_validate).forEach(([k, v]) => {
        if(v == 'required' && !value[k]){
          ret = chalk.red(`${k} is required`);
        }
      });
      return ret;
    }
  }

  return obj;
}


module.exports = {runSingle, runAll}