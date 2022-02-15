import { createRule } from "../utils";

export default createRule("no-date-string-arg", {
  meta: {
    docs: {
      description: "Disallow Date constructor with string argument",
    },
    recommended: true,
    schema: [],
    create: function (context) {
      return {
        NewExpression(node) {
          if (node.callee.name === "Date" && node.arguments.length > 0) {
            context.report(
              node,
              "Use createDate() instead because Safari parses string dates differently"
            );
          }
        },
      };
    },
  },
});
