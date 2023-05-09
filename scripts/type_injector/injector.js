import * as FrameworkTypes from "./frameworkTypes.js";

const map = {
  ColorOptions: "Colors",
  SizeOptions: "Sizes",
  SpinnerColorOptions: "SpinnerColors",
  BGColorOptions: "BGColors",
};

function injector(obj) {
  console.log(obj);
  if (typeof obj.type === "string") {
    const name = resolveName(obj.type);
    if (name in FrameworkTypes) {
      obj.kind = "union";
      obj.type = augment(FrameworkTypes[name]);
    }
  }
  return obj;
}

function resolveName(name) {
  if (map[name]) {
    return map[name];
  }

  return name;
}

function augment(t) {
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

export default injector;
