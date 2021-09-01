#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var template = require("./utils/template");
var manifest = require("../manifest.json");
var chalk = require("chalk");
var pluralize = require("pluralize");

var section_url, section_url_plural, section_name, section_name_plural;
const CURR_DIR = process.cwd();
const argv = process.argv.slice(2),
  option = argv[0],
  name = argv[1],
  section_category = argv[2] || "New";

async function main() {
  if (option == "help") {
    help();
  }

  if (!option || !name) {
    console.log(chalk.yellow("argument missed"));
    help();
  }

  let { singular, plural } = getSingularPlural(name);

  section_url = singular.toLowerCase();
  section_url_plural = plural.toLowerCase();
  section_name = sectionName(singular);
  section_name_plural = sectionName(plural);

  var story_output = path.join(CURR_DIR, manifest["story_output"]),
    story_template = manifest["story_template"];

  var options = {
    story: {
      fn: createStoryFile,
      params: [story_output, story_template],
    },
  };

  if (options[option]) {
    options[option].fn(...options[option].params);
  } else {
    console.log(chalk.yellow("option is not valid"));
    console.log("'node scripts/generators help' for help");
  }
}

main().catch((err) => console.log(chalk.red.bold(err.message)));

function getSingularPlural(str) {
  if (str) {
    if (pluralize.isPlural(str)) {
      return {
        singular: pluralize.singular(str),
        plural: str,
      };
    }
    if (pluralize.isSingular(str)) {
      return {
        singular: str,
        plural: pluralize.plural(str),
      };
    }
  }
}

function sectionName(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

function createStoryFile(file, temp) {
  var temp_path = path.join(__dirname, temp);
  var temp = fs.readFileSync(temp_path, "utf8");
  temp = template.render(temp, {
    section_url,
    section_url_plural,
    section_name,
    section_name_plural,
    section_category,
  });
  var writePath = path.join(file, section_url + ".stories.mdx");
  createFile(writePath, temp);
}

function createFile(writePath, contents) {
  var stats;
  try {
    stats = fs.statSync(writePath);
    console.log(writePath + " " + chalk.yellow("already exists"));
  } catch (e) {
    fs.writeFileSync(writePath, contents, "utf8");
    console.log(writePath + " " + chalk.green("created"));
  }
}

function help() {
  console.log("\n");
  console.log(chalk.black.bgYellow("Story Creation"));
  console.log("> node scripts/generators story loader");
  console.log("\n");

  process.exit();
}
