const noDateStringArg = require("./rules/no-date-string-arg");
const noDatalistScaffold = require("./rules/no-datalist-scaffold");

const allRules = [noDateStringArg, noDatalistScaffold];

const configs = {
  base: {
    plugins: ["@kws3/eslint-plugin-sv3-rules"],
    overrides: [
      {
        files: ["*.svelte"],
        parser: require.resolve("svelte-eslint-parser"),
        rules: allRules.reduce((obj, r) => {
          obj[r.meta.docs.ruleName] = "error";
          return obj;
        }, {}),
      },
    ],
  },
};

const rules = allRules.reduce((obj, r) => {
  obj[r.meta.docs.ruleName] = r;
  return obj;
}, {});

module.exports = { configs, rules };
