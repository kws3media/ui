#!/usr/bin/env node
var fs = require("fs");
var { resolve, join } = require("path");
const glob = require("glob");
const path = require("path");
// var createRequire = require("module");
var { mkdirp, rimraf, walk } = require("../utils/filesystem.js");
var { write } = require("../utils/helper.js");
const svelte2tsx = require("svelte2tsx");
//var svelteShimsPath = require("svelte2tsx/svelte-shims.d.ts");

const cwd = join(__dirname);
const output = join(cwd, "dist");
const input = resolve("./packages/@kws3/ui/");

glob("./packages/@kws3/ui/**/*.svelte", function (err, svelteFiles) {
  if (err) {
    console.log("Error", err);
  } else {
    if (svelteFiles.length) {
      main(svelteFiles);
    }
  }
});

/**
 * Generates d.ts files by invoking TypeScript's "emit d.ts files from input files".
 * The files are written to a temporary location and those which should be kept
 * are sanitized ($lib alias resolved) and copied over to the destination folder.
 *
//  * @param {string} input
//  * @param {string} output
//  * @param {Record<string, string>} alias
//  * @param {import('./types').File[]} files
 */
async function main(files) {
  console.log("Input:" + input + "\n");
  console.log("output:" + output + "\n");
  console.log("cwd:" + cwd + "\n");
  console.log("files:" + files.length + "\n");

  const tmp = `${output}/`;
  rimraf(tmp);
  mkdirp(tmp);

  await svelte2tsx.emitDts({
    libRoot: input,
    svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
    declarationDir: path.relative(cwd, tmp),
  });

  // resolve $lib alias (TODO others), copy into package dir
  for (const file of walk(tmp)) {
    //const normalized = posixify(file);
    //console.log(`Normalizing: ${file}`);

    const source = fs.readFileSync(tmp, "utf8");
    write(output, source);
  }

  //rimraf(tmp);
}

main().catch((err) => console.log(err.message));
