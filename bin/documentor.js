const fs = require("fs");
const prettier = require("prettier");
const sveltedocParser = require("sveltedoc-parser");

const { readFileSync, writeFileSync } = fs;

args = process.argv.slice(2);
let file = args[0];

try {
  checkFileIsValid(file);
} catch (e) {
  console.log(e);
  return;
}

function checkFileIsValid(file) {
  let parts = file.split("."),
    extension = parts.pop();
  if (extension.toLowerCase() != "svelte") {
    throw new Error(
      "Only svelte files can be documented, this is a " + extension + " file"
    );
  }
}

let configFile = "./.prettierrc";

let source = readFileSync(file, { encoding: "utf8", flag: "r" });

global.COMPONENT_FEATURES = {};

//pre-parse using sveltedoc-parser to pull out component features
sveltedocParser
  .parse({
    version: 3,
    fileContent: source,
    encoding: "utf8",
    features: ["name", "events", "slots"],
  })
  .then((componentDoc) => {
    global.COMPONENT_FEATURES = parseDoc(componentDoc);

    prettier.clearConfigCache();

    //format using custom plugin
    prettier.resolveConfig(configFile).then((options) => {
      let formatted = prettier.format(
        source,
        Object.assign(
          {
            parser: "svelte",
            plugins: ["./bin/prettier-plugin-kws3"],
            pluginSearchDirs: ["./bin/"],
          },
          options
        )
      );

      writeFileSync(file, formatted);
    });
  })
  .catch((e) => {
    console.error(e);
  });

function parseDoc(doc) {
  let obj = {
    name: "",
    events: [],
    slots: [],
  };

  obj.name = doc.name || "";
  obj.events = fillEvents(doc);
  obj.slots = fillSlots(doc);

  return obj;
}

function fillEvents(doc) {
  let events = [];
  if (doc.events.length) {
    doc.events.forEach((e) => {
      if (typeof e.parent == "undefined" && e.visibility == "public") {
        let eventText = `- \`${e.name}\``;
        let hasDescription = false;
        if (e.description) {
          hasDescription = true;
          eventText += ` - ${e.description}`;
        }

        if (e.keywords && e.keywords.length) {
          e.keywords.forEach((k) => {
            if (k.name == "returns" || k.name == "return") {
              eventText += `${hasDescription ? ", " : ""} Returns: \`${
                k.description
              }\``;
            }
          });
        }

        events.push(eventText);
      }
    });
  }

  return events;
}

function fillSlots(doc) {
  let slots = [];
  if (doc.slots.length) {
    doc.slots.forEach((s) => {
      let slotText = `- \`<slot name="${s.name}"`;
      let slotParams = "";
      if (typeof s.params != "undefined" && s.params.length) {
        let sp = [];
        s.params.forEach((p) => {
          sp.push(`{${p.name.replace(/[\{\}]/g, "")}}`);
        });
        slotParams = sp.join(" ");
      }
      slotText += " " + slotParams + " />`";
      if (s.description) {
        slotText += " - " + s.description;
      }

      slots.push(slotText);
    });
  }

  return slots;
}
