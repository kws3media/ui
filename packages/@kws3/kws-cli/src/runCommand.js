const { Select, Confirm, Input, Form, Snippet } = require("enquirer");
const chalk = require("chalk");
const path = require("path");
const {
  exec,
  isObject,
  asyncForEach,
  niceOptions,
  getKeyFromNiceOption,
} = require("./utils.js");

async function collectAndRun(cmd, name) {
  var _cmd = null,
    name = name || null,
    description = null;

  if (typeof cmd == "string") {
    _cmd = cmd;
    name = cmd;
  } else if (cmd.command) {
    _cmd = cmd.command;
    name = cmd.name || name || _cmd;
    description = cmd.description || null;
  }

  _cmd = _cmd.replace(/[\\\/]/g, path.sep);

  if (cmd.Questions) {
    var _result = {};
    for (var question of cmd.Questions) {
      var res = await prompt(question, _result);
      if (res) {
        Object.assign(_result, formatResult(res.result, res.options));
      }
    }
    _cmd = applyCommand(_cmd, _result);
  } else {
    var { options, result } = await prompt(cmd);
    _cmd = applyCommand(_cmd, formatResult(result, options));
  }

  console.log(chalk.bold.green.underline("Running " + name));
  if (description) {
    console.log(chalk.bold.green(description));
  }

  await exec(_cmd);
}

async function runSingle(cmd, name) {
  var _cmd = null,
    name = name || null;
  description = null;
  if (typeof cmd == "string") {
    _cmd = cmd;
    name = cmd;
  } else if (cmd.command) {
    _cmd = cmd.command;
    name = cmd.name || name || _cmd;
    description = cmd.description || null;
  }

  var allow_running = true;
  if (cmd.skippable) {
    const prompt = new Confirm({
      name: name,
      message: "Run " + name + "? " + (description ? `(${description})` : ""),
    });

    allow_running = await prompt.run();
  }

  if (allow_running) {
    await collectAndRun(cmd, name);
  }
}

async function runAll(cmds) {
  await asyncForEach(Object.entries(cmds), async ([k, el]) => {
    await runSingle(el, k);
  });
}

async function prompt(obj, answers) {
  var type,
    options,
    prompt,
    result,
    flag = true;

  if (obj.when) {
    var { field, condition, value } = obj.when;
    flag = false;

    if (typeof answers[field] != "undefined") {
      switch (condition) {
        case "eq":
          if (answers[field] == value) flag = true;
          break;
        case "xeq":
          if (answers[field] != value) flag = true;
          break;
        case "gt":
          if (answers[field] > value) flag = true;
          break;
        case "gte":
          if (answers[field] >= value) flag = true;
          break;
        case "lt":
          if (answers[field] < value) flag = true;
          break;
        case "lte":
          if (answers[field] <= value) flag = true;
          break;
      }
    }
  }

  if (!flag) {
    return;
  }

  if (obj.type) {
    type = obj.type;
  } else {
    if (obj.Input) type = "input";
    if (obj.Form) type = "form";
    if (obj.Select) type = "select";
  }

  switch (type) {
    case "input":
      options = injectValidation(obj.Input || obj);
      prompt = new Input(options);
      result = await prompt.run();
      break;

    case "form":
      options = injectValidation(obj.Form || obj);
      prompt = new Form(options);
      result = await prompt.run();
      break;

    case "select":
      options = injectValidation(obj.Select || obj);
      options.choices = niceOptions(options.choices);

      prompt = new Select(options);

      result = await prompt.run();
      result = getKeyFromNiceOption(result);
      break;
  }

  return { options, result };
}

function formatResult(result, options) {
  var _result = {};
  if (isObject(result)) {
    Object.assign(_result, result);
  } else {
    _result[options.name] = result;
  }
  return _result;
}

function applyCommand(command, answer) {
  Object.entries(answer).forEach(([k, v]) => {
    const key = k,
      regex = new RegExp("\\$\\{" + key + "\\}", "g");
    command = command.replace(regex, v);
  });

  return command;
}

function injectValidation(obj) {
  if (obj.validate) {
    let old_validate = obj.validate;
    obj.validate = function (value) {
      let ret = true;
      if (isObject(value)) {
        Object.entries(old_validate).forEach(([k, v]) => {
          if (v == "required" && (!value[k] || value[k].trim() == "")) {
            ret = chalk.red(`${k} is required`);
          }
        });
      } else {
        if (
          Object.values(old_validate).includes("required") &&
          (!value || value.trim() == "")
        ) {
          ret = chalk.red(`${Object.keys(old_validate)[0]} is required`);
        }
      }

      return ret;
    };
  }

  return obj;
}

module.exports = { runSingle, runAll };
