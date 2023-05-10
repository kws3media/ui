import path from "path";
import fs from "fs";
import { posixify } from "../utils/filesystem.js";

const basePath = path.resolve(process.cwd(), "./packages/@kws3/ui");
const cachePath = path.resolve(process.cwd(), "./.cache");
const tsconfigPath = path.join(basePath, "tsconfig.json");
const tsconfigContent = fs.readFileSync(tsconfigPath).toString();

// Use 'eval' to read the JSON as it is regular JavaScript syntax and that comments are allowed
let tsconfig = {};
eval(`tsconfig = ${tsconfigContent}`);

const randomChars = () => {
  return Math.random().toString(36).slice(2);
};

export function makeTempConfig(filepath) {
  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath);
    console.log(`Folder '${cachePath}' created successfully.`);
  }

  const tempPath = posixify(
    path.join(cachePath, `tsconfig.${randomChars()}.json`)
  );
  const tempConfig = {
    ...tsconfig,
    compilerOptions: {
      ...tsconfig.compilerOptions,
      baseUrl: basePath,
    },
    files: [filepath],
    include: [],
  };
  fs.writeFileSync(tempPath, JSON.stringify(tempConfig, null, 2));

  return tempPath;
}

export function cleanupTempConfig(filepath) {
  if (filepath.endsWith(".json")) {
    fs.rmSync(filepath);
  }
}
