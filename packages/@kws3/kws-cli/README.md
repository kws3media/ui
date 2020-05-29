# kws-cli

Kws3 CLI to bootstrap application templates, and generate application specific files


Install
-----
```bash
> npm install -g @kws3/kws-cli
```

Run
---
```bash
> kws-cli
```
And follow the prompts

----

If you know the answers for followup questions.. you can actually type it with the command.
For example:
```bash
> kws-cli scaffold
# this will not ask you the first question,
# and behave as if you have selected "scaffold" option

> kws-cli scaffold api
# this will not ask you the second question,
# and behave as if you have selected "api" option

> kws-cli scaffold api git
# this will not ask you the third question,
# and behave as if you have selected "git" option
```

----

Example Format for project based kws-cli.json files
---
```json
{
  "post-scaffold":{ // commands in here will run after project has been scaffolded
    "composer-install":{
      "command": "composer install", // the actual command that will run
      "description": "Install all packages from composer",
      "skippable": true // will allow user to skip this
    }
    // more tasks can be added here
  },

  "generators":{ // commands in here will show in the "Generate" subsection, use this to generate project files
    "create-somefile": "touch somefile.js",
  },

  "scripts":{ // commands in here will show in the "ecec" subsection, use this to run adhoc scripts, such as migrations etc
    "migrate": "src/vendor/bin/phpmig migrate",
  }
}
```
---
##Supported command formats
###One liners
```json
  {
    "create-somefile": "touch somefile.js"
  }
```
###One liners with name and description
```json
  {
    "create-somefile": {
      "name": "Generate somefile.js",
      "description": "Creates a file called somefile.js in root directory",
      "command": "touch somefile.js"
    }
  }
```
###Commands that need to collect user input
There are 3 supported ways of collecting user input before running a command
#### 1. Input
Displays a text box to collect user input and makes it available to the command. example:
```json
 {
  "migration":{
    "name": "Generate new migration file",
    "command": "src/vendor/bin/phpmig generate ${filename}",
    "Input":{ //denotes "Input" type
      "name": "filename", //this and the variable used in the command (${filename}) have to be the same
      "validate": {
        "filename": "required" //optional validation, only "required" is supported right now
      },
      "message": "What is the migration file name?",
      "initial": "" //optional, if you would like to prefill the value with something
    }
  },
 }
```
#### 2. Select
Displays a list of predefined options for user to choose from. example:
```json
 {
  "initiate-tests":{
    "name": "Start running test",
    "command": "php bin/test ${type}",
    "Input":{ //denotes "Input" type
      "name": "type", //this and the variable used in the command (${type}) have to be the same
      "message": "What type of test to run?",
      "choices": {
        "lint":{"description": "Run a lint test on all files"},
        "functional":{"description": "Run a functional test on all files"},
        "coverage":{"description": "Run a coverage test on full project"}
      }
    }
  },
 }
```
#### 3. Form
Sometimes you need to collect more than 1 piece of information to use in a command, use a form in those cases. example:
```json
 {
  "fill-package": {
    "description": "Fills the project name, version and SALT etc",
    "command": "fictional-command --p=${package_name} --v=${package_version} --s=${salt}",
    "Form":{
      "validate": {
        "salt": "required" //optional validation per field, only "required" is supported right now
      },
      "message": "Please provide the following information:",
      "choices": [
        {
          "name": "package_name", //this has to match the variable in the command (${package_name})
          "message": "Package Name", // form label
          "initial": "some-api" //optional initial value
        },
        { "name": "package_version", "message": "Package Version", "initial": "0.0.1" },
        { "name": "salt", "message": "Application SALT", "initial": ""}
      ]
    }
  }
 }
```
