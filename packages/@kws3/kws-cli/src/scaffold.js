const _manifest = require("../manifest.json");
const { Select, Input } = require("enquirer");
const { rimrafSync } = require("sander");
const chalk = require("chalk");
const {
  exec,
  dirIsEmpty,
  loadLocalConfig,
  niceOptions,
  getValueFromNiceOption,
  getKeyFromNiceOption,
} = require("./utils.js");
const { runAll } = require("./runCommand.js");

const PLATFORM = process.platform,
  grouped_plaforms = {
    windows: ["win32"],
    win: ["win32"],
    unix: ["linux", "darwin", "freebsd", "openbsd"],
  };

const supported_protocols = {
  git: "git@github.com:",
  https: "https://github.com/",
};

const manifest = Object.assign(_manifest, {
    "CUSTOM REPO": {
      description: "Lets you type in a custom repo url",
      repo: null,
    },
  }),
  argv = process.argv.slice(3),
  repo = argv[0],
  branch = argv[1],
  protocol = argv[2],
  repo_keys = Object.keys(manifest),
  protocol_keys = Object.keys(supported_protocols),
  destination = "./";

function platformMatches(platforms) {
  if (Array.isArray(platforms)) {
    for (let i = 0; i < platforms.length; i++) {
      const el = platforms[i];
      if (el === PLATFORM) {
        return true;
      } else {
        if (typeof grouped_plaforms[el] != "undefined") {
          if (grouped_plaforms[el].includes(PLATFORM)) {
            return true;
          }
        }
      }
    }
  } else if (typeof platforms == "string") {
    if (platforms === PLATFORM) {
      return true;
    } else {
      if (typeof grouped_plaforms[platforms] != "undefined") {
        if (grouped_plaforms[platforms].includes(PLATFORM)) {
          return true;
        }
      }
    }
  }
  return false;
}

async function main() {
  if (!dirIsEmpty(destination)) {
    throw new Error(`Destination directory is not empty, aborting.`);
  }

  if (repo && repo_keys.indexOf(repo) !== -1) {
    getBranch(getValueFromNiceOption(repo, "repo", manifest));
  } else {
    const prompt = new Select({
      name: "repo",
      message: "Pick a repo to start on",
      choices: niceOptions(manifest),
    });

    prompt
      .run()
      .then((answer) =>
        getBranch(getValueFromNiceOption(answer, "repo", manifest))
      )
      .catch(console.error);
  }
}

async function getRepo() {
  const input = new Input({
    message: "What is the repo short url?",
    initial: "example: nodejs/node",
  });

  input
    .run()
    .then((answer) => getBranch(answer))
    .catch(console.error);
}

async function getBranch(repo) {
  if (!repo) {
    getRepo();
  } else {
    if (branch) {
      prepare(repo, branch);
    } else {
      const input = new Input({
        message: "Which branch or tag would you like to use?",
        initial: "default branch for repo",
      });

      input
        .run()
        .then((answer) => prepare(repo, answer))
        .catch(console.error);
    }
  }
}

function prepare(repo, branch) {
  if (protocol && protocol_keys.indexOf(protocol) !== -1) {
    download(repo, branch, protocol);
  } else {
    const prompt = new Select({
      name: "repo",
      message: "Pick a protocol",
      choices: niceOptions(supported_protocols),
    });

    prompt
      .run()
      .then((answer) =>
        download(
          repo,
          branch,
          getKeyFromNiceOption(answer, null, supported_protocols)
        )
      )
      .catch(console.error);
  }
}

async function download(repo, branch, protocol) {
  const has_branch =
    branch && branch.toLowerCase() !== "default branch for repo";
  console.log(
    chalk.bold.underline(
      `Cloning ${supported_protocols[protocol]}${repo} ${
        has_branch ? `Branch: ${branch}` : ""
      }`
    )
  );
  await exec(
    `git clone ${has_branch ? `-b ${branch}` : ""} ${
      supported_protocols[protocol]
    }${repo} --progress --verbose --depth 1 ${destination}`
  );

  console.log(chalk.bold.underline("\nClearing .git folder"));
  rimrafSync(`${destination}.git`);
  console.log(chalk.green.bold("Project files scaffolded\n"));

  console.log(chalk.bold("Checking for post-scaffold tasks\n"));
  const localConfig = loadLocalConfig(null, true);
  if (localConfig["post-scaffold"]) {
    let filtered = {};
    Object.entries(localConfig["post-scaffold"]["tasks"]).forEach(([k, v]) => {
      if (typeof v.platforms != "undefined") {
        if (platformMatches(v.platforms)) {
          filtered[k] = v;
        }
      } else {
        filtered[k] = v;
      }
    });

    await runAll(filtered);
  }

  console.log(
    chalk.green.bold.inverse("\n✔ ✔ ✔ Scaffolding complete ✔ ✔ ✔ \n")
  );
}

module.exports = main;
