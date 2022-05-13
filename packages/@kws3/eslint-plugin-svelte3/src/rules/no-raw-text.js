const createRule = require("../utils");

const RE_REGEXP_STR = /^\/(.+)\/(.*)$/u;

const hasOnlyWhitespace = (value) => /^[\r\n\s\t\f\v]+$/.test(value);

function parseTargetAttrs(options) {
  const regexps = [];
  for (const tagName of Object.keys(options)) {
    const attrs = new Set(options[tagName]);
    regexps.push({
      name: toRegExp(tagName),
      attrs,
    });
  }
  return regexps;
}

function toRegExp(str) {
  const parts = RE_REGEXP_STR.exec(str);
  if (parts) {
    return new RegExp(parts[1], parts[2]);
  }
  return new RegExp(`^${encodeURI(str)}$`);
}

function getTargetAttrs(tagName, config) {
  const result = [];
  for (const { name, attrs } of config.attributes) {
    name.lastIndex = 0;
    if (name.test(tagName)) {
      result.push(...attrs);
    }
  }

  return new Set(result);
}

function checkSvelteLiteralOrText(context, literal, config) {
  if (testValue(literal.value, config)) {
    return;
  }

  const loc = literal.loc;
  context.report({
    loc,
    message: `Raw text '${literal.value.trim()}' is used. Use {$T.Something()}`,
  });
}

function testValue(value, config) {
  if (typeof value === "string") {
    return (
      hasOnlyWhitespace(value) ||
      config.ignorePattern.test(value.trim()) ||
      config.ignoreText.includes(value.trim())
    );
  } else {
    return false;
  }
}

function checkSvelteMustacheTagText(context, node, config) {
  if (!node.expression || !node.parent) {
    return;
  }

  if (node.parent.type === "SvelteElement") {
    // parent is element (e.g. <p>{ ... }</p>)
    checkExpressionText(context, node.expression, config);
  }
}

function checkExpressionText(context, expression, config) {
  if (expression.type === "Literal") {
    checkLiteral(context, expression, config);
  } else if (isStaticTemplateLiteral(expression)) {
    checkLiteral(context, expression, config);
  } else if (expression.type === "ConditionalExpression") {
    const targets = [expression.consequent, expression.alternate];
    targets.forEach((target) => {
      if (target.type === "Literal") {
        checkLiteral(context, target, config);
      } else if (isStaticTemplateLiteral(target)) {
        checkLiteral(context, target, config);
      }
    });
  }
}

function checkLiteral(context, literal, config) {
  const value =
    literal.type !== "TemplateLiteral"
      ? literal.value
      : literal.quasis[0].value.cooked;

  if (testValue(value, config)) {
    return;
  }

  const loc = literal.loc;
  context.report({
    loc,
    message: `Raw text '${value.trim()}' is used. Use {$T.Something()}`,
  });
}

function isStaticTemplateLiteral(node) {
  return Boolean(
    node && node.type === "TemplateLiteral" && node.expressions.length === 0
  );
}

function create(context) {
  const sourceCode = context.getSourceCode(),
    config = {
      attributes: [],
      ignorePattern: /^$/,
      ignoreNodes: [],
      ignoreText: [],
    };

  if (context.options[0]?.ignorePattern) {
    config.ignorePattern = new RegExp(context.options[0].ignorePattern, "u");
  }

  if (context.options[0]?.ignoreNodes) {
    config.ignoreNodes = context.options[0].ignoreNodes;
  }

  if (context.options[0]?.ignoreText) {
    config.ignoreText = context.options[0].ignoreText;
  }

  if (context.options[0]?.attributes) {
    config.attributes = parseTargetAttrs(context.options[0].attributes);
  }

  function isIgnore(node) {
    const element = getElement(node);

    return (
      !element ||
      config.ignoreNodes.includes(sourceCode.text.slice(...element.name.range))
    );
  }

  function getElement(node) {
    let target = node.parent;
    while (
      target.type === "SvelteIfBlock" ||
      target.type === "SvelteElseBlock" ||
      target.type === "SvelteEachBlock" ||
      target.type === "SvelteAwaitBlock" ||
      target.type === "SvelteAwaitPendingBlock" ||
      target.type === "SvelteAwaitThenBlock" ||
      target.type === "SvelteAwaitCatchBlock" ||
      target.type === "SvelteKeyBlock"
    ) {
      target = target.parent;
    }

    if (target.type === "SvelteElement") {
      return target;
    }

    return null;
  }

  return {
    SvelteAttribute(node) {
      if (node.value.length !== 1 || node.value[0].type !== "SvelteLiteral") {
        return;
      }

      const nameNode = node.parent.parent.name;
      const tagName = sourceCode.text.slice(...nameNode.range);
      const attrName = node.key.name;

      if (!getTargetAttrs(tagName, config).has(attrName)) {
        return;
      }

      checkSvelteLiteralOrText(context, node.value[0], config);
    },
    SvelteMustacheTag(node) {
      if (isIgnore(node)) {
        return;
      }
      checkSvelteMustacheTagText(context, node, config);
    },
    SvelteText(node) {
      if (isIgnore(node)) {
        return;
      }
      checkSvelteLiteralOrText(context, node, config);
    },
  };
}

module.exports = createRule("no-raw-text", {
  meta: {
    docs: {
      description: "Disallow to string literal in template",
      recommended: true,
    },
    schema: [
      {
        type: "object",
        properties: {
          attributes: {
            type: "object",
            patternProperties: {
              "^(?:\\S+|/.*/[a-z]*)$": {
                type: "array",
                items: { type: "string" },
                uniqueItems: true,
              },
            },
            additionalProperties: false,
          },
          ignoreNodes: {
            type: "array",
          },
          ignorePattern: {
            type: "string",
          },
          ignoreText: {
            type: "array",
          },
        },
      },
    ],
  },
  create,
});
