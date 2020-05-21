#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var template = require("./utils/template");
var menifest = require("./manifest.json");
var chalk = require("chalk");
var {argv} = require("yargs");



var view_name = argv.view;
var folder_name = argv.folder ? argv.folder : '';


var section_url = view_name.toLowerCase();
var section_name = sectionName(view_name);
const CURR_DIR = process.cwd();
var templates = menifest['templates'];
var views_output = menifest['views_output'];


async function main() {
  templates.forEach(function (temp) {
    var [name, _path] = Object.entries(temp)[0];

    name = name.replace('_temp', section_name)
    var temp_path = path.join(__dirname, _path);
    var stats = fs.statSync(temp_path);

    if (stats.isFile()) {
      var contents = fs.readFileSync(temp_path, 'utf8');
      contents = template.render(contents, { section_url, section_name })

      var writePath = path.join(CURR_DIR, views_output + '/' + name + '.html');

      console.log(writePath)
      fs.writeFileSync(writePath, contents, 'utf8');
    }
  })

}

main().catch((err) => console.log(chalk.red.bold(err.message)));


function sectionName(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}