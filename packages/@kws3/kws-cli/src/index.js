const {Select} = require('enquirer');
const chalk = require('chalk');
const {niceOptions, getKeyFromNiceOption, getValueFromNiceOption, loadLocalConfig} = require('./utils.js');
const scaffold = require('./scaffold.js');
const {runSingle} = require('./runCommand.js');

const argv = process.argv.slice(2),
task_type_to_perform = argv[0],
localConfig = loadLocalConfig();

let task_types = {
  scaffold: {description: 'Seed a new project with a template'}
};

task_types = Object.assign(task_types, localConfig);

const task_type_keys = Object.keys(task_types);

async function main(){
  if(task_type_to_perform && task_type_keys.indexOf(task_type_to_perform) != -1){
    handle(task_type_to_perform);
  }else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick something you would like to do:',
      choices: niceOptions(task_types)
    });

    prompt.run()
    .then(async (answer) => await handle(getKeyFromNiceOption(answer)))
    .catch(console.error);
  }

}

async function handle(task_type){
  if(task_type == 'scaffold'){
    scaffold().catch((err) => console.log(chalk.red.bold(err.message)));
  }else{
    const subsection = task_types[task_type],
    subtask_keys = subsection.tasks;
    const prompt = new Select({
      name: 'repo',
      message: 'Pick ' + task_type + ' command:',
      choices: niceOptions(subtask_keys)
    });

    let answer = await prompt.run();

    let name = getKeyFromNiceOption(answer),
    cmd = getValueFromNiceOption(answer, null, subtask_keys);
    await runSingle(cmd, name);
  }
}


main().catch((err) => console.log(chalk.red.bold(err.message)));
