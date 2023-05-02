const fs = require("fs");
const { execSync } = require("child_process");

const args = process.argv.slice(2);
let input = args[0];

async function generateDts() {
  try {
    execSync(
      `npx tsc ${input} --declaration --declarationMap --emitDeclarationOnly --allowJS`,
      {
        stdio: "inherit",
      }
    );
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  if (input.endsWith(".js")) {
    await generateDts();
  } else if (input.endsWith("d.ts") || input.endsWith("d.ts.map")) {
    fs.rmSync(input);
  }
}

if (input) {
  main();
} else {
  console.log("No input File!!");
}
