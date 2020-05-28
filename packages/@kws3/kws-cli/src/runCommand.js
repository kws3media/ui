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
    const options = injectValidation(cmd.Input),
    prompt = new Input(options);

    var result = await prompt.run();
    _cmd = applyCommand(options, _cmd, result);

  }else if(cmd.Form){
    const options = injectValidation(cmd.Form),
    prompt = new Form(options);

    var result = await prompt.run();
    _cmd = applyCommand(options, _cmd, result);

  }else if(cmd.Select){
    const options = injectValidation(cmd.Select),
    prompt = new Select(options);

    var result = await prompt.run();
    _cmd = applyCommand(options, _cmd, result);
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
  let processObj = answer;
  if(!isObject(answer)){
    const key = options.name;
    processObj = {};
    processObj[key] = answer;
  }
  Object.entries(processObj).forEach(([k, v]) => {
    const key = k,
    regex = new RegExp('\\$\\{'+key+'\\}', 'g');
    command = command.replace(regex, v);
  });

  return command;
}

function injectValidation(obj){
  if(obj.validate){
    let old_validate = obj.validate;
    obj.validate = function(value){
      let ret = true;
      if(isObject(value)){
        Object.entries(old_validate).forEach(([k, v]) => {
          if(v == 'required' && (!value[k] || value[k].trim() == '')){
            ret = chalk.red(`${k} is required`);
          }
        });
      }else{
        if(Object.values(old_validate).includes('required') && (!value || value.trim() == '')){
          ret = chalk.red(`${Object.keys(old_validate)[0]} is required`);
        }
      }

      return ret;
    }
  }

  return obj;
}

function isObject(obj){
  return typeof obj === 'object' && obj !== null;
}


module.exports = {runSingle, runAll}