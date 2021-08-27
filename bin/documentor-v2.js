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
    features: ["name", "events", "slots", "data", "methods"],
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
    params: [],
    moduleParams: [],
  };

  obj.name = doc.name || "";
  obj.events = fillEvents(doc);
  obj.slots = fillSlots(doc);
  obj.params = fillData(doc, false);
  obj.moduleParams = fillData(doc, true);

  return obj;
}

function fillEvents(doc) {
  let events = [];
  if (doc.events.length) {
    doc.events.forEach((e) => {
      if (/*typeof e.parent == "undefined" && */ e.visibility == "public") {
        let eventText = `- \`${e.name}\``;
        let hasDescription = false;

        //forwarded events pick up @component from the top when running on already documented file
        //so we need to filter those out
        if (e.description && !e.description.startsWith("@")) {
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

function fillData(doc, is_static) {
  let params = [];

  //data
  if (doc.data.length) {
    let data = doc.data.filter((i) => i.static === is_static);

    data.forEach((d) => {
      let type = d.type.text;

      switch (type) {
        case "function":
          params.push(makeFunctionDoc(d));
          break;

        default:
          let defaultValue = getDefaultValue(d);
          let description =
            d.description ||
            `${d.name.charAt(0).toUpperCase() + d.name.slice(1)} property`;

          if (d.kind == "const") {
            description = "`CONST` " + description;
          }

          params.push(
            "@param {" +
              type +
              "} [" +
              d.name +
              "=" +
              defaultValue +
              "] - " +
              description +
              ", Default: `" +
              defaultValue +
              "`"
          );
      }
    });
  }

  //methods
  if (doc.methods.length) {
    let methods = doc.methods.filter((i) => i.static === is_static);
    methods.forEach((d) => {
      params.push(makeFunctionDoc(d));
    });
  }

  return params;
}

function makeFunctionDoc(e) {
  let props = [];
  let description =
    " - " +
    (e.description ||
      `${e.name.charAt(0).toUpperCase() + e.name.slice(1)} function`);

  if (typeof e.params != "undefined" && e.params.length) {
    e.params.forEach((i) => {
      props.push(i.name + (i.defaultValue ? " = " + i.defaultValue : ""));
    });
  } else {
    if (typeof e.keywords != "undefined" && e.keywords.length) {
      e.keywords.forEach((i) => {
        if (i.name == "param") {
          props.push(i.description);
        }
      });
    }
  }

  return (
    "@param {function} [" + e.name + "(" + props.join(", ") + ")]" + description
  );
}

function getDefaultValue(e) {
  let defaultValue = e.defaultValue;
  let type = e.type.text;

  if (typeof defaultValue == "undefined") {
    if (typeof e.keywords != "undefined" && e.keywords.length) {
      e.keywords.forEach((i) => {
        if (["default", "defaultValue", "defaultvalue"].indexOf(i.name) != -1) {
          defaultValue = i.description;
        }
      });
    }
  }

  if (typeof defaultValue == "undefined") {
    if (type == "number") {
      defaultValue += "";
    } else if (type == "string") {
      defaultValue = '""';
    } else if (type == "array") {
      defaultValue = "[]";
    } else if (type == "object") {
      defaultValue = "{}";
    }
  } else {
    if (type == "string") {
      defaultValue = '"' + defaultValue + '"';
    }
  }

  return defaultValue;
}
