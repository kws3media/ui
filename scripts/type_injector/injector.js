import * as FrameworkTypes from "./frameworkTypes.js";

const map = {
  ColorOptions: "Colors",
  SizeOptions: "Sizes",
  SpinnerColorOptions: "SpinnerColors",
  BGColorOptions: "BGColors",
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
  }
  return obj;
}

export default injector;
