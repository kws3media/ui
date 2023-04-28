const chokidar = require("chokidar");

const watcher = chokidar.watch(".", {
  persistent: true,
});

watcher
  .on("add", (path) => console.log(`File ${path} has been added`))
  .on("addDir", (path) => console.log(`Directory ${path} has been added`))
  .on("change", (path) => console.log(`File ${path} has been changed`))
  .on("unlink", (path) => console.log(`File ${path} has been removed`))
  .on("unlinkDir", (path) => console.log(`Directory ${path} has been removed`))
  .on("ready", () => console.log("Initial scan complete. Watching for changes"))
  .on("error", (error) => console.log(`Watcher error: ${error}`));
