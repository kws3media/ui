module.exports = function createRule(ruleName, rule) {
  return {
    meta: {
      ...rule.meta,
      docs: {
        ...rule.meta.docs,
        ruleId: `@kws3/svelte3/${ruleName}`,
        ruleName,
      },
    },
    create: rule.create,
  };
};
