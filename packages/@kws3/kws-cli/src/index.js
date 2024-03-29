const UpdateNotifier = require("update-notifier");
const pkg = require("../package.json");
const { Select } = require("enquirer");
const chalk = require("chalk");
const {
  niceOptions,
  getKeyFromNiceOption,
  getValueFromNiceOption,
  loadLocalConfig,
  dirIsEmpty,
} = require("./utils.js");
const scaffold = require("./scaffold.js");
const { runSingle } = require("./runCommand.js");

const argv = process.argv.slice(2),
  task_type_to_perform = argv[0],
  sub_task_type_to_perform = argv[1],
  localConfig = loadLocalConfig();

const Notifier = UpdateNotifier({
  pkg,
  updateCheckInterval: 86400,
});

if (Notifier.update) {
  Notifier.notify({ defer: false });
  Notifier.notify({ defer: true });
}

let task_types = {
  scaffold: { description: "Seed a new project with a template" },
};
if (!dirIsEmpty("./")) {
  task_types = {};
}

task_types = Object.assign(task_types, localConfig);

const task_type_keys = Object.keys(task_types);

async function main() {
  if (
    task_type_to_perform &&
    task_type_keys.indexOf(task_type_to_perform) !== -1
  ) {
    handle(task_type_to_perform);
  } else {
    if (task_type_keys.length === 0) {
      console.log(
        chalk.red.bold("Destination directory is not empty, so cannot scaffold")
      );
      throw new Error(`Also, no kws-cli.json file present in folder`);
    }

    const prompt = new Select({
      name: "repo",
      message: "Pick something you would like to do:",
      choices: niceOptions(task_types),
    });

    prompt
      .run()
      .then(async (answer) => await handle(getKeyFromNiceOption(answer)))
      .catch(console.error);
  }
}

async function handle(task_type) {
  if (task_type === "scaffold") {
    scaffold().catch((err) => console.log(chalk.red.bold(err.message)));
  } else {
    const subsection = task_types[task_type],
      subtasks = subsection.tasks,
      subtask_keys = Object.keys(subtasks);

    let answer = null;

    if (
      sub_task_type_to_perform &&
      subtask_keys.indexOf(sub_task_type_to_perform) !== -1
    ) {
      answer = sub_task_type_to_perform;
    } else {
      const prompt = new Select({
        name: "repo",
        message: "Pick " + task_type + " command:",
        choices: niceOptions(subtasks),
      });

      answer = await prompt.run();
    }

    let name = getKeyFromNiceOption(answer),
      cmd = getValueFromNiceOption(answer, null, subtasks);
    await runSingle(cmd, name);
  }
}

main().catch((err) => console.log(chalk.red.bold(err.message)));
