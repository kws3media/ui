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

let getParms = (AST) => {
  let items = [];

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
            let comment = node.leadingComments.pop().value;
            let _parsedComment = commentparser.parse("/**\n" + comment + "*/");
            _parsedComment = _parsedComment.pop();

            let typeTag = getTag(_parsedComment.tags, "type"),
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

          //so we should keep the format
          //eg: export let size = "";
          //eg: export let height = "";

          node.declaration.declarations.map((declaration) => {
            let name = declaration.id.name;
            let value = declaration.init.value;
            let type = TYPE || typeof value;
            let defaultValue = DEFAULT_VALUE || declaration.init.value;

            if (!defaultValue) {
              if (type == "number") {
                defaultValue += "";
              } else if (type == "string") {
                defaultValue = '""';
              }
            } else {
              if (type == "string") {
                defaultValue = '"' + defaultValue + '"';
              }
            }

            let description = COMMENT
              ? COMMENT
              : `${name.charAt(0).toUpperCase() + name.slice(1)} property`;
            if (KIND == "const") {
              description = "`CONST` " + description;
            }

            //eg: @param {boolean} [is_active=false] - Show or hide item, default `false`
            items.push(
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
          });

          //TODO: Arrow function declaration exports
          //TODO: Named function declaration exports
        }
      }
    },
  });

  return items;
};

let setTopComments = (node) => {
  //convert comment text into js comment format
  let _comment = commenting(node.data, { extension: ".js" });

  //parse comment into json format
  let _parsed = commentparser.parse(_comment);

  _parsed = _parsed.pop();

  let comp = getTag(_parsed.tags, "component");
  let parms = getParms(ACTUAL_AST);

  return (
    "\n  @component\n  " +
    rebuildMultilineText(comp) +
    "\n\n  " +
    parms.join("\n  ") +
    (COMPONENT_FEATURES.events.length
      ? "\n\n  ### Events\n  " + COMPONENT_FEATURES.events.join("\n  ")
      : "") +
    (COMPONENT_FEATURES.slots.length
      ? "\n\n  ### Slots\n  " + COMPONENT_FEATURES.slots.join("\n  ")
      : "") +
    "\n\n"
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
