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

let setTopComments = (node) => {
  //convert comment text into js comment format
  let _comment = commenting(node.data, { extension: ".js" });

  //parse comment into json format
  let _parsed = commentparser.parse(_comment);

  _parsed = _parsed.pop();

  let comp = getTag(_parsed.tags, "component");
  let params = COMPONENT_FEATURES.params;
  let moduleParams = COMPONENT_FEATURES.moduleParams;

  return (
    "\n  @component\n  " +
    rebuildMultilineText(comp) +
    (params.length
      ? "\n\n  " + params.join("\n  ")
      : "\n\n  @param [_] - No properties on this component") +
    (moduleParams.length
      ? "\n\n  ### Module\n  " + moduleParams.join("\n  ")
      : "") +
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
