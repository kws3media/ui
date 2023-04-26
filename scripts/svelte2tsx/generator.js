#!/usr/bin/env node
var fs = require("fs");
var { resolve, join } = require("path");
const path = require("path");
// var createRequire = require("module");
var { posixify, mkdirp, rimraf, walk } = require("./helpers/filesystem.js");
var { resolve_aliases, write } = require("./helpers/utils.js");
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
 * @param {string} input
 * @param {string} output
 * @param {Record<string, string>} alias
 * @param {import('./types').File[]} files
 */
async function main(alias, files) {
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
  for (const file of files) {
    if (file.name.endsWith(".d.ts")) {
      handwritten.add(file.name);
    }
  }

  // resolve $lib alias (TODO others), copy into package dir
  for (const file of walk(tmp)) {
    const normalized = posixify(file);

    if (handwritten.has(normalized)) {
      console.warn(`Using $lib/${normalized} instead of generated .d.ts file`);
    }

    const source = fs.readFileSync(path.join(tmp, normalized), "utf8");
    write(
      path.join(output, normalized),
      resolve_aliases(input, normalized, source, alias)
    );
  }

  rimraf(tmp);
}

main().catch((err) => console.log(err.message));
