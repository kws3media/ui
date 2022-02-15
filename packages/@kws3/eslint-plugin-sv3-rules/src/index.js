import noDateStringArg from "./rules/no-date-string-arg";
import noDatalistScaffold from "./rules/no-datalist-scaffold";

const rules = [noDateStringArg, noDatalistScaffold].reduce((obj, r) => {
  obj[r.meta.docs.ruleName] = r;
  return obj;
}, {});

export default { rules };
