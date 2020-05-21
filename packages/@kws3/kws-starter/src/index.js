const fs = require('fs');
const manifest = require('../manifest.json');
const {Select} = require('enquirer');
const {rimrafSync} = require('sander');
const chalk = require('chalk');
const {exec} = require('./utils.js');

const supported_protocols = {
  'git': 'git@github.com:',
  'https': 'https://github.com/'
};

const argv = process.argv.slice(2),
repo = argv[0],
protocol = argv[1],
repo_keys = Object.keys(manifest),
protocol_keys = Object.keys(supported_protocols),
destination = './';

async function main(){

  _checkDirIsEmpty(destination);

  if(repo && repo_keys.indexOf(repo) != -1){
    prepare(repo);
  }
  else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick a repo to start on',
      choices: repo_keys
    });

    prompt.run()
    .then(answer => prepare(answer))
    .catch(console.error);
  }
}

function prepare(repo){
  if(protocol && protocol_keys.indexOf(protocol) != -1){
    download(repo, protocol);
  }else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick a protocol',
      choices: protocol_keys
    });

    prompt.run()
    .then(answer => download(repo, answer))
    .catch(console.error);
  }

}

async function download(repo, protocol){
  console.log(chalk.bold.underline(`Cloning ${supported_protocols[protocol]}${manifest[repo]}`));
  await exec(`git clone ${supported_protocols[protocol]}${manifest[repo]} --progress --verbose --depth 1 ${destination}`);
  console.log(chalk.bold.underline(`Clearing .git folder`));
  rimrafSync(`${destination}.git`);
  console.log(chalk.green.bold.inverse(`✔ ✔ ✔ Done ✔ ✔ ✔ `));
}

function _checkDirIsEmpty(dir) {
  try {
    const files = fs.readdirSync(dir);
    if (files.length > 0) {
      throw new Error(`Destination directory is not empty, aborting.`);
    }
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
}

main().catch((err) => console.log(chalk.red.bold(err.message)));
