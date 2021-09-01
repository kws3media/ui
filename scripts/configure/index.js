#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var pkg = require("../../package.json");
var chalk = require("chalk");



const argv = process.argv.slice(2),
pkg_name = argv[0],
pkg_version = argv[1];

async function main() {

  if(!pkg_name){
    console.log(chalk.yellow('package_name argument missing '))
    help();
  }

  if(pkg_name == 'help'){
    help();
  }

  pkg.name = pkg_name ? pkg_name : pkg.name;
  pkg.version = pkg_version ? pkg_version : pkg.version;
  fillPackageFile(pkg)
}
main().catch((err) => console.log(chalk.red.bold(err.message)));


function help() {
  console.log('\n')
  console.log(chalk.black.bgYellow('Configure package info'))
  console.log('> node scripts/configure package_name package_version');
  console.log('\n');
  process.exit()
}


function fillPackageFile(contents) {
  const pkg_file_path = path.join(__dirname, '../../package.json');
  let pretty_content =  JSON.stringify(contents, null, 2);
  if(fs.statSync(pkg_file_path)){
    fs.writeFileSync(pkg_file_path, pretty_content, 'utf8');
    console.log(pkg_file_path+" "+chalk.green('updated'))

  }else{
    console.log(pkg_file_path+" "+chalk.yellow('file not found'));
  }
}