// //@ts-check
// const eventKeyModifierProps = {
//   17: "metaKey",
//   16: "shiftKey",
//   18: "altKey",
// };
// export function makeKeyDefinition(opts) {
//   let code = opts;
//   let modifierProp = null;
//   let key = null;

//   if (typeof opts === "object") {
//     code = opts.code;
//     key = opts.key;
//     modifierProp = eventKeyModifierProps[code];
//   }

//   return function (node, fire) {
//     function keydownHandler(event) {
//       console.log(event);
//       if (modifierProp && event[modifierProp]) {
//       }
//       event.preventDefault();
//       var which = event.which || event.keyCode;
//       let valid = false;

//       if (event[modifierProp] && key === event.key) {
//         valid = true;
//       } else if (!modifierProp && which === code) {
//         valid = true;
//       }

//       if (valid) {
//         fire(event);
//       }
//     }

//     node.addEventListener("keydown", keydownHandler, false);

//     return {
//       destroy() {
//         node.removeEventListener("keydown", keydownHandler, false);
//       },
//     };
//   };
// }

// export var enter = makeKeyDefinition(13);
// export var tab = makeKeyDefinition(9);
// export var escape = makeKeyDefinition(27);
// export var space = makeKeyDefinition(32);
// export var leftarrow = makeKeyDefinition(37);
// export var rightarrow = makeKeyDefinition(39);
// export var downarrow = makeKeyDefinition(40);
// export var uparrow = makeKeyDefinition(38);
// export var backspace = makeKeyDefinition(8);
// export var del = makeKeyDefinition(46);
// export var ctrl = (key) => {
//   return makeKeyDefinition({
//     code: 17,
//     key: key,
//   });
// };
// export var shift = (key) => {
//   return makeKeyDefinition({
//     code: 16,
//     key: key,
//   });
// };
// export var alt = (key) => {
//   return makeKeyDefinition({
//     code: 18,
//     key: key,
//   });
// };

// export default {
//   enter,
//   tab,
//   escape,
//   space,
//   leftarrow,
//   rightarrow,
//   downarrow,
//   uparrow,
//   backspace,
//   del,
//   ctrl,
//   shift,
// };

//@ts-check
const ctrlKeys = {
  ctrl: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey",
  alt: "altKey",
};
export function makeKeyDefinition(definition) {
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

// working with keaycode also
// export let enter = makeKeyDefinition(13);
// export let tab = makeKeyDefinition(9);
// export let escape = makeKeyDefinition(27);
// export let space = makeKeyDefinition(32);
// export let leftarrow = makeKeyDefinition(37);
// export let rightarrow = makeKeyDefinition(39);
// export let downarrow = makeKeyDefinition(40);
// export let uparrow = makeKeyDefinition(38);
// export let backspace = makeKeyDefinition(8);
// export let del = makeKeyDefinition(46);

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

// export var ctrl = (key) => {
//   return makeKeyDefinition({
//     code: 17,
//     key: key,
//   });
// };
// export var shift = (key) => {
//   return makeKeyDefinition({
//     code: 16,
//     key: key,
//   });
// };
// export var alt = (key) => {
//   return makeKeyDefinition({
//     code: 18,
//     key: key,
//   });
// };

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
