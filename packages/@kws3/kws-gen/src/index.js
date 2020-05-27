#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var template = require("./utils/template");
var menifest = require("../manifest.json");
var chalk = require("chalk");
var {argv} = require("yargs");


var view_name = argv.view;
var folder_name = argv.folder ? argv.folder : '';


var section_url = view_name.toLowerCase();
var section_name = sectionName(view_name);
const CURR_DIR = process.cwd();
var templates = menifest['templates'];
var views_output = menifest['views_output'];
var route_file = path.join(CURR_DIR, menifest['route_file']);
var route_template = menifest['route_template'];
var route_handler_file = path.join(CURR_DIR, menifest['route_handler_file']);
var route_handler_template = menifest['route_handler_template'];

var model_output = path.join(CURR_DIR, menifest['model_output']);
var model_template = menifest['model_template'];

async function main() {

  // creating views
  // createViews()
  // appending routes to routes file
  injectRoutes(route_file, route_template);

  // appending route handler to routes file
  // injectRouteHandler(route_handler_file, route_handler_template);

  //creating model
  // createModelFile(model_output, model_template);

}

main().catch((err) => console.log(chalk.red.bold(err.message)));


function sectionName(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

function normalizeString(string) {
  console.log(string)
  return string.replace(/\s+/g, ' ');
}

function createViews(){
  templates.forEach(function (temp) {
    var [name, _path] = Object.entries(temp)[0];

    name = name.replace('_temp', section_name)
    var temp_path = path.join(__dirname, _path);
    var stats = fs.statSync(temp_path);

    if (stats.isFile()) {
      var contents = fs.readFileSync(temp_path, 'utf8');
      contents = template.render(contents, { section_url, section_name })

      var writePath = path.join(CURR_DIR, views_output + '/' + name + '.html');
      createFile(writePath, contents);
    }
  })
}

function injectRoutes(file, temp) {
  var stats =  fs.statSync(file);
  var temp_path = path.join(__dirname, temp)
  if (stats.isFile()) {
    var r_temp =  fs.readFileSync(temp_path, 'utf8');
    var r_file =  fs.readFileSync(file, 'utf8');
    r_temp = template.render(r_temp, { section_url, section_name });

    // check if same routes exists
    if(r_file.indexOf("routeMap['"+section_url+"s']") != -1){
      console.log(chalk.yellow('route "'+section_url+'s" already exists'));
      return;
    }
    var _temp = r_file.replace('export default routeMap;', `
${r_temp}
export default routeMap;`);

    fs.writeFileSync(file, _temp, 'utf8');
    console.log(file+" "+chalk.green('updated'))
  }
}

function injectRouteHandler(file, temp) {
  var stats =  fs.statSync(file);
  var temp_path = path.join(__dirname, temp)
  if (stats.isFile()) {
    var r_temp =  fs.readFileSync(temp_path, 'utf8');
    var r_file =  fs.readFileSync(file, 'utf8');
    r_temp = template.render(r_temp, { section_url, section_name });
    var _temp = r_file.replace(/lazyViews:\{([\sA-Za-z:()=>'./,-_0-1]+)\}/g, function(a,b){
      let views = normalizeString(b);
      let new_views = normalizeString(r_temp);
      if(views.indexOf(new_views) != -1){
        return b
      }
      return b+r_temp
    });
    fs.writeFileSync(file, _temp, 'utf8');
    console.log(file+" "+chalk.green('updated'))
  }
}



function createModelFile(file, temp) {

  var temp_path = path.join(__dirname, temp)
  var temp =  fs.readFileSync(temp_path, 'utf8');
  temp = template.render(temp, { section_url, section_name });
  var writePath = path.join(file,  section_url+'s.js');
  createFile(writePath, temp)
}

function createFile(writePath, contents) {
  var stats;
  try {
    stats = fs.statSync(writePath);
    console.log(writePath+" "+chalk.yellow('already exists'))
  } catch (e) {
    fs.writeFileSync(writePath, contents, 'utf8');
    console.log(writePath+" "+chalk.green('created'))
  }
}

