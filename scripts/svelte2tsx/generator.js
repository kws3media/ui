#!/usr/bin/env node
var fs = require("fs");
var { resolve, join } = require("path");
const glob = require("glob");
const path = require("path");
// var createRequire = require("module");
var { posixify, mkdirp, rimraf, walk } = require("../utils/filesystem.js");
var { resolve_aliases, write } = require("../utils/helper.js");
const svelte2tsx = require("svelte2tsx");
//var svelteShimsPath = require("svelte2tsx/svelte-shims.d.ts");

const cwd = join(__dirname);
const output = join(cwd, "dist");
const input = resolve("packages/ui");

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
async function main() {
  const tmp = `./__package_types_tmp__`;
  rimraf(tmp);
  mkdirp(tmp);

  await svelte2tsx.emitDts({
    libRoot: input,
    svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
    declarationDir: path.relative(__dirname, tmp),
  });

  const handwritten = new Set();

  // skip files that conflict with hand-written .d.ts
  glob("./packages/**/*.svelte", function (err, svelteFiles) {
    if (err) {
      console.log("Error", err);
    } else {
      if (svelteFiles.length) {
        svelteFiles.forEach((file) => {
          const filename = path.basename(file);
          console.log(`Processing ${filename}`);
          if (filename.endsWith(".d.ts")) {
            handwritten.add(filename);
          }
        });
      }
    }
  });

  // resolve $lib alias (TODO others), copy into package dir
  for (const file of walk(tmp)) {
    const normalized = posixify(file);

    // if (handwritten.has(normalized)) {
    //   console.warn(`Using $lib/${normalized} instead of generated .d.ts file`);
    // }

    const source = fs.readFileSync(path.join(tmp, normalized), "utf8");
    write(
      path.join(output, normalized),
      resolve_aliases(input, normalized, source, alia)
    );
  }

  rimraf(tmp);
}

main().catch((err) => console.log(err.message));
