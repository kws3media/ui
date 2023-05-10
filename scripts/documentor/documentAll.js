import glob from "glob";
import path from "path";
import { spawn } from "child_process";
import chalk from "chalk";

glob("./packages/**/*.svelte", function (err, svelteFiles) {
  if (err) {
    console.log("Error", err);
  } else {
    if (svelteFiles.length) {
      svelteFiles.forEach((f) => {
        const filename = path.basename(f);
        console.log(`Documenting ${filename}`);

        const docm = spawn("node", ["scripts/documentor/documentor.js", f]);
        docm.stdout.on("data", (data) => {
          console.log(`${filename}: ${data}`);
        });

        docm.stderr.on("data", (data) => {
          console.error(`${filename}: ${data}`);
        });

        docm.on("close", (code) => {
          if (code === 0) {
            console.log(`${chalk.bold.green("✓")} ${filename}`);
          } else {
            console.log(`${chalk.bold.red("✘")} ${filename}`);
          }
        });
      });
    }
  }
});
