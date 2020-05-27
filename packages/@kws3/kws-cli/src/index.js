const {Select, Input} = require('enquirer');
const chalk = require('chalk');
const {exec, niceRepoOptions, getKeyFromNiceOption} = require('./utils.js');
const scaffold = require('./scaffold.js');

const argv = process.argv.slice(2),
task_types = {
  scaffold: {description: 'Seed a new project with a template'}
},
task_type_to_perform = argv[0];

const task_type_keys = Object.keys(task_types);

async function main(){
  if(task_type_to_perform && task_type_keys.indexOf(task_type_to_perform) != -1){
    handle(task_type_to_perform);
  }else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick something you would like to do:',
      choices: niceRepoOptions(task_types)
    });

    prompt.run()
    .then(answer => handle(getKeyFromNiceOption(answer)))
    .catch(console.error);
  }

}

function handle(task_type){
  if(task_type == 'scaffold'){
    scaffold().catch((err) => console.log(chalk.red.bold(err.message)));
  }
}


main().catch((err) => console.log(chalk.red.bold(err.message)));
