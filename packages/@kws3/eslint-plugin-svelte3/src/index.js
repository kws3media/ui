const noDateStringArg = require("./rules/no-date-string-arg");
const noDatalistScaffold = require("./rules/no-datalist-scaffold");

const allRules = [noDateStringArg, noDatalistScaffold];

const configs = {
  base: {
    plugins: ["@kws3/svelte3"],
    overrides: [
      {
        files: ["*.svelte"],
        parser: require.resolve("svelte-eslint-parser"),
        rules: allRules.reduce((obj, r) => {
          obj[r.meta.docs.ruleId] = "error";
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
