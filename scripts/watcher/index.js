import chokidar from "chokidar";
import { spawn } from "child_process";
import path from "path";
import { existsSync, rmSync } from "fs";

const scriptDir = "./scripts/dts_generator";
const watchDir = "./packages/@kws3/ui/**/*.js";
const ignoreDir = "./packages/@kws3/ui/node_modules/*";

//generate d.ts, d.ts.map files
const generateDts = (filepath) => {
  const { stdout, stderr } = spawn("node", [`${scriptDir}/index.js`, filepath]);

  stdout.on("data", (data) => console.log(`stdout: ${data}`));
  stderr.on("data", (data) => console.error(`stderr: ${data}`));
};

//remove d.ts, d.ts.map files
const removeDts = (filepath) => {
  console.log(`File ${filepath} has been removed`);

  const fileName = `${path.dirname(filepath)}/${path.basename(
    filepath,
    path.extname(filepath),
  )}`;

  [`${fileName}.d.ts`, `${fileName}.d.ts.map`].forEach((file) => {
    if (existsSync(file)) {
      rmSync(file);
      watcher.unwatch(file);
      console.log(`File ${file} has been removed`);
    }
  });
};

//watch files
const watcher = chokidar.watch(watchDir, {
  persistent: true,
  ignored: ignoreDir,
});

watcher
  .on("add", generateDts)
  .on("change", generateDts)
  .on("unlink", removeDts)
  .on("ready", () => console.log("Initial scan complete. Ready for changes"))
  .on("error", (error) => console.log(`Watcher error: ${error}`));
