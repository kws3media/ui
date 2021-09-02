const glob = require("glob");
const path = require("path");
const { spawn } = require("child_process");
const chalk = require("chalk");

glob("./packages/**/*.svelte", function (err, svelteFiles) {
  if (err) {
    console.log("Error", err);
  } else {
    if (svelteFiles.length) {
      svelteFiles.forEach((f) => {
        const filename = path.basename(f);
        console.log(`Documenting ${filename}`);

        const docm = spawn("node", ["bin/documentor.js", f]);
        docm.stdout.on("data", (data) => {
          console.log(`${filename}: ${data}`);
        });

        docm.stderr.on("data", (data) => {
          console.error(`${filename}: ${data}`);
        });

        docm.on("close", (code) => {
          if (code == 0) {
            console.log(`${chalk.bold.green("✓")} ${filename}`);
          } else {
            console.log(`${chalk.bold.red("✘")} ${filename}`);
          }
        });
      });
    }
  }
});
