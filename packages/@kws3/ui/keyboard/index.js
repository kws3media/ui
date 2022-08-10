//@ts-check
function makeKeyDefinition(code) {
  return function (node, fire) {
    function keydownHandler(event) {
      var which = event.which || event.keyCode;

      if (which === code) {
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
export var alt = makeKeyDefinition(18);
export var ctrl = makeKeyDefinition(17);

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
  alt,
  ctrl,
};
