export function createRule(ruleName, rule) {
  return {
    meta: {
      ...rule.meta,
      docs: {
        ...rule.meta.docs,
        ruleId: `@kws3/rules/${ruleName}`,
        ruleName,
      },
    },
    create: rule.create,
  };
}
