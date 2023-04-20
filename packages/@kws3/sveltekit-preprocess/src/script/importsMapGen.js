const fs = require("fs");

let exportsList = "";
// Read the JavaScript file as text
fs.readFile("../../../ui/index.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    exportsList = data;
    const exportsArray = [];
    let expls = exportsList
      .split(/;\r\n/)
      .map((line) => line.trim())
      .filter((line) => line.startsWith("export"));

    console.log(expls);

    expls.forEach((line) => {
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
            filepath: _filePath,
            packageType,
          });
        });
      }
    });

    // Write the exports array to a JSON file
    fs.writeFileSync("./exports.json", JSON.stringify(exportsArray, null, 2));
    console.log(exportsArray);

    console.log("JSON file generated successfully!");
  }
});

// Define the list of exports
