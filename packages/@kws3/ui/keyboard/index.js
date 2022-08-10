//@ts-check
const eventKeyModifierProps = {
  17: "metaKey",
  18: "shiftKey",
};
export function makeKeyDefinition(opts) {
  let code = opts;
  let modifierProp = null;
  let key = null;

  if (typeof opts === "object") {
    code = opts.code;
    key = opts.key;
    modifierProp = eventKeyModifierProps[code];
  }

  return function (node, fire) {
    function keydownHandler(event) {
      var which = event.which || event.keyCode;
      let valid = false;

      if (event[modifierProp] && key === event.key) {
        valid = true;
      } else if (!modifierProp && which === code) {
        valid = true;
      }

      if (valid) {
        fire(event);
      }
    }

    node.addEventListener("keydown", keydownHandler, false);

    return {
      destroy() {
        node.removeEventListener("keydown", keydownHandler, false);
      },
    };
  };
}

export var enter = makeKeyDefinition(13);
export var tab = makeKeyDefinition(9);
export var escape = makeKeyDefinition(27);
export var space = makeKeyDefinition(32);
export var leftarrow = makeKeyDefinition(37);
export var rightarrow = makeKeyDefinition(39);
export var downarrow = makeKeyDefinition(40);
export var uparrow = makeKeyDefinition(38);
export var backspace = makeKeyDefinition(8);
export var del = makeKeyDefinition(46);
export var ctrl = (key) => {
  return makeKeyDefinition({
    code: 17,
    key: key,
  });
};
export var shift = (key) => {
  return makeKeyDefinition({
    code: 16,
    key: key,
  });
};

export default {
  enter,
  tab,
  escape,
  space,
  leftarrow,
  rightarrow,
  downarrow,
  uparrow,
  backspace,
  del,
  ctrl,
  shift,
};
