#!/usr/bin/env node
var { resolve, join } = require("path");
const path = require("path");
var { mkdirp, rimraf } = require("../utils/filesystem.js");
const svelte2tsx = require("svelte2tsx");

const cwd = join(__dirname);
const output = join(cwd, "dist");
const input = resolve("./packages/@kws3/ui/");

/**
 * Generates d.ts files by invoking TypeScript's "emit d.ts files from input files".
 * The files are written to a temporary location and those which should be kept
 * are sanitized ($lib alias resolved) and copied over to the destination folder.
 *
 */
async function main() {
  const tmp = `${output}/`;
  rimraf(tmp);
  mkdirp(tmp);

  await svelte2tsx.emitDts({
    libRoot: input,
    svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
    declarationDir: path.relative(cwd, tmp),
  });
}

main().catch((err) => console.log(err.message));
