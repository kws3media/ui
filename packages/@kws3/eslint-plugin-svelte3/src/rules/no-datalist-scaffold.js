const createRule = require("../utils");

module.exports = createRule("no-datalist-scaffold", {
  meta: {
    docs: {
      description: "Disallow wrapping DataList with ViewScaffold",
    },
    recommended: true,
    schema: [],
  },
  create: function (context) {
    return {
      SvelteElement(node) {
        if (node.kind === "component" && node.name.name === "ViewScaffold") {
          if (checkChildComponent(node.children, "DataList")) {
            context.report(node, "Do not use Viewscaffold to wrap DataList");
          }
        }
      },
    };
  },
});

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
