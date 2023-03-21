// @ts-nocheck
import components from "../components";

export default function resolveComponentsPath(content) {
  let { metadata, modules } = components;
  let { package: pkg } = metadata;

  let import_pattern = /import\s+\{([\w\s,\d]+)\}\s+from\s+"@kws3\/ui";/g;
  let import_declaration = new RegExp(import_pattern);
  let match = import_declaration.exec(content);
  if (match != null) {
    let components = match[1].split(",").map((c) => c.trim());
    let imports_string = "";
    components.forEach((component) => {
      if (modules[component] && component !== "") {
        let path =
          modules[component].externalPackage === true
            ? `"${modules[component].path}"`
            : `"${pkg.path}/${modules[component].path}"`;

        if (modules[component].exportType === "default") {
          imports_string += `import ${component} from ${path};\n`;
        }

        if (modules[component].exportType === "named") {
          imports_string += `import {${component}} from ${path};\n`;
        }
      } else {
        console.warn(`${modules[component]} component not found`);
      }
    });
    return content.replace(import_pattern, imports_string);
  }
  return content;
}
