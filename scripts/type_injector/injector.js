import * as FrameworkTypes from "./frameworkTypes.js";

const map = {
  ColorOptions: "Colors",
  SizeOptions: "Sizes",
  ExtendedColorOptions: "ExtendedColors",
  BGColorOptions: "BGColors",
  PopperStrategiesOptions: "PopperStrategies",
};

const EXCLUDE_RE = /Exclude<\s*([^,]*),\s*([^>]*)>/;
const EXTRACT_RE = /Extract<\s*([^,]*),\s*([^>]*)>/;

function resolveName(name) {
  if (map[name]) {
    return map[name];
  }

  return name;
}

function augmentText(original, t) {
  let out = [];
  t.forEach((n) => {
    out.push("'" + n + "'");
  });

  return " " + original + ":| " + out.join("|");
}

function augmentTypes(t) {
  let out = [];
  t.forEach((n) => {
    out.push({
      kind: "const",
      text: "'" + n + "'",
      type: typeof n,
      value: n,
    });
  });

  return out;
}

function processPlainName(obj, name) {
  obj.kind = "union";
  obj.type = augmentTypes(FrameworkTypes[name]);
  obj.text = augmentText(obj.text, FrameworkTypes[name]);

  return obj;
}

function injector(obj) {
  if (typeof obj.type === "string") {
    const name = resolveName(obj.type);
    if (name in FrameworkTypes) {
      return processPlainName(obj, name);
    }
    //if name starts with "Exclude<" process them here, use Regex above
    //if name starts with "Extract<" process them here, use Regex above
    if (name.startsWith("Exclude<")) {
      return processExcludeGeneric(obj, name);
    }
    if (name.startsWith("Extract<")) {
      return processExtractGeneric(obj, name);
    }
  }
  return obj;
}

function processExcludeGeneric(obj, name) {
  const matches = EXCLUDE_RE.exec(name.toString());
  if (matches) {
    let type_name = matches[1];
    if (FrameworkTypes[type_name]) {
      let excludedTypes = matches[2].replace(/["'\s+]/g, "").split("|");
      let types = FrameworkTypes[type_name].filter(
        (val) => !excludedTypes.includes(val),
      );

      obj.kind = "union";
      obj.type = augmentTypes(types);
      obj.text = augmentText(type_name, types);
      return obj;
    }
  }
}

function processExtractGeneric(obj, name) {
  const matches = EXTRACT_RE.exec(name.toString());
  if (matches) {
    let type_name = matches[1];
    if (FrameworkTypes[type_name]) {
      let extractedTypes = matches[2].replace(/["'\s+]/g, "").split("|");
      let types = extractedTypes.filter((val) =>
        FrameworkTypes[type_name].includes(val),
      );

      obj.kind = "union";
      obj.type = augmentTypes(types);
      obj.text = augmentText(type_name, types);
      return obj;
    }
  }
}

export default injector;
