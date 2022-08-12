//@ts-nocheck

import { IS_MAC } from "../internal";
const ctrlKeys = {
  ctrl: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey",
  alt: "altKey",
};

/**
 * @param {string | number} definition - can be a string like 'Enter', 'Tab' or number as keyCode, also allow combination key like 'ctrl+d', 'ctrl+alt+x'
 * @param {boolean} CommandKey - if true, in mac 'ctrl' key binding will be shift on 'command' key.
 * @returns {function} .
 */

export function makeKeyDefinition(definition, CommandKey = false) {
  if (CommandKey) {
    if (IS_MAC) {
      definition = definition.replace("ctrl", "meta");
    }
  }
  let keys = Number.isInteger(definition)
    ? [definition]
    : definition.split("+");

  return function (node, fire) {
    function keydownHandler(event) {
      event.preventDefault();
      let firedCount = 0;
      let which = event.which || event.keyCode;
      keys.forEach((key) => {
        if (event[ctrlKeys[key]]) {
          firedCount++;
        }
        if (
          key === event.key ||
          ("key" + key).toLowerCase() === event.code.toLowerCase()
        ) {
          firedCount++;
        }
        if (key === which) {
          firedCount++;
        }
      });

      let valid = false;
      if (keys.length === firedCount) {
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

export let enter = makeKeyDefinition("Enter");
export let tab = makeKeyDefinition("Tab");
export let escape = makeKeyDefinition("Escape");
export let space = makeKeyDefinition(" ");
export let leftarrow = makeKeyDefinition("ArrowLeft");
export let rightarrow = makeKeyDefinition("ArrowRight");
export let downarrow = makeKeyDefinition("ArrowDown");
export let uparrow = makeKeyDefinition("ArrowUp");
export let backspace = makeKeyDefinition("Backspace");
export let del = makeKeyDefinition("Delete");

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
};
