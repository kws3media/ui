import { default as _Dialog } from "./Dialog.svelte";

/**
 * @typedef {import('@kws3/ui/types').DialogProps} DialogProps
 */

function createDialog(msg, props) {
  props = Object.assign(props, { _text: msg });

  const promise = new Promise((fulfil) => {
    //@ts-ignore
    const dialog = new _Dialog({
      target: document.body,
      props,
      intro: true,
    });

    //@ts-ignore
    dialog.$on("_done", ({ detail }) => {
      fulfil(detail);
      //Does not outro out because of
      //https://github.com/sveltejs/svelte/issues/4056
      //@ts-ignore
      dialog.$destroy();
    });
  });

  return promise;
}

/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function alert(msg, props) {
  props = props || {};
  props._type = "alert";
  return createDialog(msg, props);
}

/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function prompt(msg, props) {
  props = props || {};
  props._type = "prompt";
  return createDialog(msg, props);
}

/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function confirm(msg, props) {
  props = props || {};
  props._type = "confirm";
  return createDialog(msg, props);
}

class Dialog extends _Dialog {}

Dialog.alert = alert;
Dialog.confirm = confirm;
Dialog.prompt = prompt;

export default Dialog;
