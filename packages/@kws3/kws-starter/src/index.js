const manifest = require('../manifest.json');
const degit = require('degit');
const {Select} = require('enquirer');

const repo = process.argv.slice(2)[0],
repo_keys = Object.keys(manifest);

async function main(){

  if(repo && repo_keys.indexOf(repo) != -1){
    download(repo);
  }
  else{
    const prompt = new Select({
      name: 'repo',
      message: 'Pick a repo to start on',
      choices: repo_keys
    });

    prompt.run()
    .then(answer => download(answer))
    .catch(console.error);
  }
}

function download(repo){
  const emitter = degit(manifest[repo], {
    cache: true,
    force: true,
    verbose: true,
    mode: 'git'
  });

  emitter.on('info', info => {
    console.log(info.message);
  });

  emitter.clone('./').then(() => {
    console.log('done');
  });
}

main();
