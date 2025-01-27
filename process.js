import fs from "fs";

/*


Processes firecrawl.dev JSON output documents and
converts them to llms-full.tx files

*/

const _data = fs.readFileSync("documents_1.json", "utf-8");
const data = JSON.parse(_data);

let out = "";
data.forEach((item) => {
  if (item.markdown && item.markdown.trim() !== "") {
    if (item.metadata && item.metadata.url) {
      out += item.metadata.url + "\n";
    }
    if (item.metadata && item.metadata.title) {
      out +=
        item.metadata.title
          .replace(" ⋅ Storybook", "")
          .replace(" - Docs", "")
          .replace(/^(.*) - Page$/gm, "$1") + "\n";
    }
    out += item.markdown
      .replace(/<br>/gm, "\n")
      .replace(/^Show code$/gm, "")
      .replace(/^Copy$/gm, "")
      .replace(/Show \d* more\.\.\./g, "")
      .replace(/^Version\d\.\d\.\d+$/gm, "")
      .replace(/^\[v1.x.xCompatible with Svelte 2\].*$/gm, "")
      .replace(/^\[Github\]\(https:\/\/github.com.*$/gm, "")
      .replace(/\n\n\n\n\n/gm, "");

    out += "\n\n-------------------------------------\n";
  }
});

fs.writeFileSync("public/llms-full.txt", out);
