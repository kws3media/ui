const fs = require("fs");
const glob = require("glob");
const { execSync } = require("child_process");
const path = require("path");
const { resolve_aliases, write } = require("../utils/helper.js");
const { rimraf, mkdirp, copy } = require("../utils/filesystem.js");
const chalk = require("chalk");
const svelte2tsx = require("svelte2tsx");

const folders = {
  package: path.resolve(process.cwd(), "./packages/@kws3/ui"),
  internalTypes: path.resolve(
    process.cwd(),
    "./packages/@kws3/ui/internalTypes"
  ),
  generatedTypes: path.resolve(
    process.cwd(),
    "./packages/@kws3/ui/generatedTypes"
  ),
  generatedInternalTypes: path.resolve(
    process.cwd(),
    "./packages/@kws3/ui/generatedTypes/internalTypes"
  ),
};

const aliases = {
  "@kws3/ui/types": folders.generatedInternalTypes,
};

const fixAliases = function (file, content) {
  return resolve_aliases(folders.package, file, content, aliases);
};

const adjustAliases = function () {
  glob(folders.generatedTypes + "/**/*.d.ts", function (err, dtsFiles) {
    if (err) {
      console.log("Error", err);
    } else {
      if (dtsFiles.length) {
        dtsFiles.forEach((f) => {
          const source = fs.readFileSync(f, "utf8");
          const relativePath = path.relative(folders.package, f);
          write(f, fixAliases(relativePath, source));
          console.log(`${chalk.bold.green("✓")} ${relativePath}`);
        });
      }
    }
  });
};

async function generateSvelteDts() {
  await svelte2tsx.emitDts({
    libRoot: folders.package,
    svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
    declarationDir: "generatedTypes",
  });
}

async function main() {
  /**
   * rm -rf generatedTypes &&
   * mkdir -p generatedTypes &&
   * cp -R ./internalTypes generatedTypes/internalTypes &&
   * npx -p typescript tsc -p ./ --emitDeclarationOnly
   */
  rimraf(folders.generatedTypes);
  mkdirp(folders.generatedTypes);
  copy(folders.internalTypes, folders.generatedInternalTypes);

  try {
    execSync(`npx tsc -p ${folders.package} --emitDeclarationOnly`, {
      stdio: "inherit",
    });
  } catch (e) {
    console.log(e);
  }

  //this is not required for now.. we will need to revisit
  //if we can watch and emit single dts files per svelte component
  // then the plan is to move all types declarations to a separate folder
  //and point to that folder in package.json
  //await generateSvelteDts();

  adjustAliases();
}

main();
