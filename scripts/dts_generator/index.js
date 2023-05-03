const { execSync } = require("child_process");
const { makeTempConfig, cleanupTempConfig } = require("./utils");
const path = require("path");

const args = process.argv.slice(2);
let input = path.relative(process.cwd(), path.basename(args[0]));

async function generateDts() {
  try {
    const tempConfig = makeTempConfig(input);
    execSync(`npx tsc -p ${tempConfig}`, {
      stdio: "inherit",
    });
    cleanupTempConfig(tempConfig);
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  if (input && input.endsWith(".js")) {
    await generateDts();
  }
}

main();
