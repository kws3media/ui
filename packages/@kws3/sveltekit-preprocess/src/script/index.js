import fs from "fs/promises";

const index_file_url = "../../../ui/index.js";

async function readIndexFile() {
  try {
    const data = await fs.readFile(index_file_url, { encoding: "utf8" });
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function writeExportFile() {
  let exportsList = await readIndexFile();
  const exportsArray = [];
  let list =
    typeof exportsList !== "undefined" &&
    exportsList
      .split(/;\r\n/)
      .map((line) => line.trim())
      .filter((line) => line.startsWith("export"));

  console.log(list);

  let exportCount = 0;

  Array.isArray(list) &&
    list.forEach((line) => {
      const match = /export\s+{(.*?)}\s+from\s+['"](.*?)['"]/g.exec(
        line.replace(/[\r\n]+/g, "")
      );
      if (match) {
        // const exportType = match[1] ? match[1].replace('{', '').replace('}', '').trim() : 'default';
        const exportNames = match[1].split(",").filter(Boolean);
        const filePath = match[2];
        // console.log(match)
        exportNames.forEach((name) => {
          let _name = name.trim();
          let _filePath = filePath.trim();
          let type = "";
          let packageType = "";

          if (/default\s+as/.test(_name)) {
            type = "default";
          } else {
            type = "named";
          }
          _name = _name.replace(/[\w\d]+\s+as/, "");

          if (_filePath.startsWith("./")) {
            _filePath = _filePath.replace("./", "");
            packageType = "internal";
          } else {
            packageType = "external";
          }
          exportsArray.push({
            name: _name.trim(),
            exportType: type,
            path: _filePath,
            packageType,
          });
          exportCount++;
        });
      }
    });

  let components = {
    meta: {
      exports: exportCount,
    },
    modules: exportsArray,
  };

  fs.writeFile("./components.json", JSON.stringify(components, null, 2));
  console.log(exportsArray);

  console.log("exports file generated successfully!");
}

writeExportFile();

// Define the list of exports
