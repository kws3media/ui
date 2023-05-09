import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const inPath = "./packages/@kws3/ui/types/type-defs/index.d.ts";
const outputPath = path.join(__dirname, "./frameworkTypes.js");

const tsTypes = fs.readFileSync(inPath, { encoding: "utf8", flag: "r" });
let modifiedTypes = tsTypes.replace(/as const/g, "");

const blurb = `
/**
 * This file is auto-generated.
 * It is used to monkey-patch stprybook doc generation for the frontend.
 * It allows us to resolve string list types so that we get a dropdown of options
 * for custom types that resolve to a list of strings.
 *
 * To update this file, run \`npm run sync:frameworkTypes\`
 */


`;

fs.writeFileSync(outputPath, blurb + modifiedTypes);
