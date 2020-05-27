const _manifest = require('../manifest.json');
const {Select, Input} = require('enquirer');
const {rimrafSync} = require('sander');
const chalk = require('chalk');
const {exec, checkDirIsEmpty, niceRepoOptions, getValueFromNiceOption} = require('./utils.js');

const supported_protocols = {
  'git': 'git@github.com:',
  'https': 'https://github.com/'
};

const manifest = Object.assign(_manifest, {'CUSTOM REPO': {description: 'Lets you type in a custom repo url'}}),
argv = process.argv.slice(3),
repo = argv[0],
protocol = argv[1],
repo_keys = Object.keys(manifest),
protocol_keys = Object.keys(supported_protocols),
destination = './';

async function main(){

  checkDirIsEmpty(destination);

  if(repo && repo_keys.indexOf(repo) != -1){
    prepare(getValueFromNiceOption(repo, 'repo', manifest));
  }
  else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick a repo to start on',
      choices: niceRepoOptions(manifest)
    });

    prompt.run()
    .then(answer => prepare(getValueFromNiceOption(answer, 'repo', manifest)))
    .catch(console.error);
  }
}

function prepare(repo){
  if(protocol && protocol_keys.indexOf(protocol) != -1){
    validate(repo, protocol);
  }else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick a protocol',
      choices: protocol_keys
    });

    prompt.run()
    .then(answer => validate(repo, answer))
    .catch(console.error);
  }

}

function validate(repo, protocol){
  if(repo){
    download(repo, protocol)
  }else{
    const input = new Input({
      message: 'What is the repo short url?',
      initial: 'example: nodejs/node'
    });

    input.run()
    .then(answer => download(answer, protocol))
    .catch(console.error);
  }
}

async function download(repo, protocol){
  console.log(chalk.bold.underline(`Cloning ${supported_protocols[protocol]}${repo}`));
  await exec(`git clone ${supported_protocols[protocol]}${repo} --progress --verbose --depth 1 ${destination}`);
  console.log(chalk.bold.underline(`Clearing .git folder`));
  rimrafSync(`${destination}.git`);
  console.log(chalk.green.bold.inverse(`✔ ✔ ✔ Done ✔ ✔ ✔ `));
}

module.exports = main;
