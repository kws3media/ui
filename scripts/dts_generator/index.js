const { execSync } = require("child_process");
const { makeTempConfig, cleanupTempConfig } = require("./utils");

const args = process.argv.slice(2);
let input = args[0];

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
  } else {
    console.log("No input File!!");
  }
}

main();
