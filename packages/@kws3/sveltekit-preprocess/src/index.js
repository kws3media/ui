import resolveComponentsPath from "./preprocessors/resolveComponentsPath";

export function optimizeImports() {
  return {
    script: ({ content }) => {
      return { code: resolveComponentsPath(content) };
    },
  };
}
