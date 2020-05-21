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