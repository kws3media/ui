let {
  languages,
  options,
  parsers,
  printers,
} = require("prettier-plugin-svelte");
let { parse, walk } = require("svelte/compiler");
let commenting = require("commenting");
let commentparser = require("comment-parser");

let ACTUAL_AST = {};

let EXPRESSION_MAP = {
  ArrayExpression: "array",
  ObjectExpression: "object",
};

let modifyAST = (AST) => {
  let componentDocsFound = false;

  walk(AST.html, {
    enter(node) {
      if (typeof node.children != "undefined") {
        node.children.map((item) => {
          if (item.type == "Comment" && item.data.includes("@component")) {
            item.data = setTopComments(item);
            componentDocsFound = true;
          }
        });
      }
    },
  });

  //add @component docs if not present in file
  if (!componentDocsFound) {
    AST.html.children.unshift(
      {
        type: "Comment",
        data: "\n @component\n\n",
        ignores: [],
      },
      {
        type: "Text",
        raw: "\n",
        data: "\n",
      }
    );
    return modifyAST(AST);
  }

  return AST;
};

let getParams = (AST) => {
  let params = [];

  walk(AST.instance, {
    enter(node) {
      if (node.type == "ExportNamedDeclaration") {
        if (node.declaration.type == "VariableDeclaration") {
          //comments are an array
          //if we put 2 comment blocks befor export property
          //then we only take last item into the action

          let COMMENT = "",
            KIND = node.declaration.kind,
            TYPE,
            DEFAULT_VALUE;

          if (typeof node.leadingComments != "undefined") {
            //eg: "*\r\n * Title of the component\r\n * @type {string}\r\n * @defaultvalue empty\r\n "
            let _parsedComment = getCommentParsed([...node.leadingComments]),
              typeTag = getTag(_parsedComment.tags, "type"),
              dvTag = getTag(_parsedComment.tags, "default"),
              dvTag2 = getTag(_parsedComment.tags, "defaultvalue");

            TYPE = typeTag ? typeTag.type : undefined;
            DEFAULT_VALUE = dvTag ? dvTag.name : undefined;
            if (typeof DEFAULT_VALUE == "undefined") {
              DEFAULT_VALUE = dvTag2 ? dvTag2.name : undefined;
            }

            COMMENT = _parsedComment.description;
          }

          //declarations are an array
          //eg: export let size = "", height = "";

          node.declaration.declarations.map((declaration, index) => {
            if (declaration.init.type == "ArrowFunctionExpression") {
              //eg: @function `add(x, y)` - Add function
              params.push(
                makeFunctionDoc(
                  declaration.id.name,
                  declaration.init.params,
                  node.leadingComments
                )
              );
            } else {
              let name = declaration.id.name;
              let value = declaration.init.value;
              let type =
                TYPE || EXPRESSION_MAP[declaration.init.type] || typeof value;
              let defaultValue = DEFAULT_VALUE || declaration.init.value;

              let description = COMMENT
                ? COMMENT
                : `${name.charAt(0).toUpperCase() + name.slice(1)} property`;

              if (node.declaration.declarations.length > 1 && COMMENT != "") {
                if (index === 0) {
                  description = COMMENT;
                } else {
                  description = `${
                    name.charAt(0).toUpperCase() + name.slice(1)
                  } property`;
                }
              }

              if (KIND == "const") {
                description = "`CONST` " + description;
              }

              if (!defaultValue) {
                if (type == "number") {
                  defaultValue += "";
                } else if (type == "string") {
                  defaultValue = '""';
                } else if (type == "array") {
                  defaultValue = "[]";
                } else if (type == "object") {
                  defaultValue = "{}";
                }
              } else {
                if (type == "string") {
                  defaultValue = '"' + defaultValue + '"';
                }
              }

              //eg: @param {boolean} [is_active=false] - Show or hide item, default `false`
              params.push(
                "@param {" +
                  type +
                  "} [" +
                  name +
                  "=" +
                  defaultValue +
                  "] - " +
                  description +
                  ", Default: `" +
                  defaultValue +
                  "`"
              );
            }
          });
        }

        if (node.declaration.type == "FunctionDeclaration") {
          //eg: @function `add(x, y)` - Add function
          params.push(
            makeFunctionDoc(
              node.declaration.id.name,
              node.declaration.params,
              node.leadingComments
            )
          );
        }
      }
    },
  });

  return params;
};

let getCommentParsed = (comments) => {
  let comment = comments.pop().value;
  let _parsedComment = commentparser.parse("/**\n" + comment + "*/");
  return _parsedComment.pop();
};

let setTopComments = (node) => {
  //convert comment text into js comment format
  let _comment = commenting(node.data, { extension: ".js" });

  //parse comment into json format
  let _parsed = commentparser.parse(_comment);

  _parsed = _parsed.pop();

  let comp = getTag(_parsed.tags, "component");
  let params = getParams(ACTUAL_AST);

  return (
    "\n  @component\n  " +
    rebuildMultilineText(comp) +
    (params.length
      ? "\n\n  " + params.join("\n  ")
      : "\n\n  @param [_] - No properties on this component") +
    (COMPONENT_FEATURES.events.length
      ? "\n\n  ### Events\n  " + COMPONENT_FEATURES.events.join("\n  ")
      : "") +
    (COMPONENT_FEATURES.slots.length
      ? "\n\n  ### Slots\n  " + COMPONENT_FEATURES.slots.join("\n  ")
      : "") +
    "\n\n"
  );
};

let makeFunctionDoc = (name, params, comments) => {
  let props = [];
  let description = "";

  if (typeof comments != "undefined") {
    description = getCommentParsed([...comments]).description;
  }

  description = description
    ? description
    : `${name.charAt(0).toUpperCase() + name.slice(1)} function`;

  if (typeof params != "undefined") {
    params.forEach((e) => {
      switch (e.type) {
        //eg function (x) {}
        case "Identifier":
          props.push(e.name);
          break;

        //eg: function (x = 1) {}
        case "AssignmentPattern":
          props.push(e.left.name + " = " + e.right.value);
          break;
      }
    });
  }

  return (
    "@param {function} [" +
    name +
    "(" +
    props.join(", ") +
    ")]" +
    (description ? " - " + description : "")
  );
};

let getTag = (tags, tagName) => {
  if (typeof tags != "undefined" && Object.values(tags).length > 0) {
    let list = tags.filter((item) => item.tag == tagName);
    return list.length == 1 ? list.pop() : list;
  }
};

let rebuildMultilineText = (item) => {
  //remove first item from source, which is usually the tag such as "@component"
  item.source.shift();

  //rebuild text from source tokens to preserve line breaks
  return item.source
    .reduce((prev, line) => {
      return (prev ? prev + "\n  " : "") + line.tokens.description;
    }, null)
    .trimRight();
};

function getRegexp(tagName) {
  return new RegExp(`<${tagName}([^]*?)>([^]*?)<\/${tagName}>`, "g");
}

function snipSCSS(text) {
  return text.replace(getRegexp("style"), (match, attributes, content) => {
    return `<style${attributes}></style>`;
  });
}

//patching the parser here
let old_parser = parsers.svelte.parse;
parsers.svelte.parse = (text) => {
  try {
    return modifyAST(old_parser(text));
  } catch (err) {
    if (err.start != null && err.end != null) {
      // Prettier expects error objects to have loc.start and loc.end fields.
      // Svelte uses start and end directly on the error.
      err.loc = {
        start: err.start,
        end: err.end,
      };
    }
    throw err;
  }
};

let old_preprocess = parsers.svelte.preprocess;
parsers.svelte.preprocess = (text, options) => {
  //need to first hide the scss, otherwise causes problems
  let sanitizedText = snipSCSS(text);

  //we are stealing the AST from here
  ACTUAL_AST = parse(sanitizedText);

  return old_preprocess(text, options);
};

exports.languages = languages;
exports.options = options;
exports.parsers = parsers;
exports.printers = printers;
