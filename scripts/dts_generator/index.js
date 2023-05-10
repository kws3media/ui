import { execSync } from "child_process";
import { makeTempConfig, cleanupTempConfig } from "./utils.js";
import path from "path";

const args = process.argv.slice(2);
let input = path.relative(
  path.resolve("./packages/@kws3/ui/"),
  path.resolve(args[0])
);

async function generateDts() {
  const tempConfig = makeTempConfig(input);
  try {
    execSync(`npx tsc -p ${tempConfig}`, {
      stdio: "inherit",
    });
  } catch (e) {
    console.log(e);
  }
  //cleanupTempConfig(tempConfig);
}

async function main() {
  if (input && input.endsWith(".js")) {
    await generateDts();
  }
}

main();
