const chokidar = require("chokidar");
const { spawn } = require("child_process");

const scriptDir = "./scripts/dts_generator";
const watchDir = "./packages/@kws3/ui";

const generateDts = (filepath) => {
  const { stdout, stderr } = spawn("node", [`${scriptDir}/index.js`, filepath]);

  stdout.on("data", (data) => console.log(`stdout: ${data}`));
  stderr.on("data", (data) => console.error(`stderr: ${data}`));
};

const watcher = chokidar.watch(watchDir, { persistent: true });

//missing `addDir`, `unlinkDir` events
watcher
  .on("add", (filepath) => generateDts(filepath))
  .on("change", (filepath) => generateDts(filepath))
  .on("unlink", (filepath) => generateDts(filepath))
  .on("ready", () => console.log("Initial scan complete. Ready for changes"))
  .on("error", (error) => console.log(`Watcher error: ${error}`));
