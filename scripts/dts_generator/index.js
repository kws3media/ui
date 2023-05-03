const { execSync } = require("child_process");
const { makeTempConfig, cleanupTempConfig } = require("./utils");
const path = require("path");

const args = process.argv.slice(2);
let input = path.relative(process.cwd(), path.basename(args[0]));

async function generateDts() {
  const tempConfig = makeTempConfig(input);
  try {
    execSync(`npx tsc -p ${tempConfig}`, {
      stdio: "inherit",
    });
  } catch (e) {
    console.log(e);
  }
  cleanupTempConfig(tempConfig);
}

async function main() {
  if (input && input.endsWith(".js")) {
    await generateDts();
  }
}

main();
