module.exports = {
  rules: {
    "no-date": {
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
    "no-scaffold": {
      create: function (context) {
        return {
          SvelteElement(node) {
            if (
              node.kind === "component" &&
              node.name.name === "ViewScaffold"
            ) {
              if (checkChildComponent(node.children, "DataList")) {
                context.report(
                  node,
                  "Do not use Viewscaffold to wrap DataList"
                );
              }
            }
          },
        };
      },
    },
  },
};

function checkChildComponent(node, childComponentName) {
  return node.some(
    (item) =>
      item.type === "SvelteElement" &&
      item.name &&
      item.name.name === childComponentName
  )
    ? true
    : false;
}
