import { default as _Dialog } from "./Dialog.svelte";

/**
 * @typedef {import('@kws3/ui/types').DialogProps} DialogProps
 */

class Dialog {
  createDialog(msg, props) {
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

  alert(msg, props) {
    props = props || {};
    props._type = "alert";
    return this.createDialog(msg, props);
  }

  /**
   *
   * @param {string} msg
   * @param {DialogProps} [props={}]
   */
  prompt(msg, props) {
    props = props || {};
    props._type = "prompt";
    return this.createDialog(msg, props);
  }

  /**
   *
   * @param {string} msg
   * @param {DialogProps} [props={}]
   */
  confirm(msg, props) {
    props = props || {};
    props._type = "confirm";
    return this.createDialog(msg, props);
  }
}

/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function alert(msg, props) {
  let dialog = new Dialog();
  return dialog.alert(msg, props);
}

/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function prompt(msg, props) {
  let dialog = new Dialog();
  return dialog.prompt(msg, props);
}

/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function confirm(msg, props) {
  let dialog = new Dialog();
  return dialog.confirm(msg, props);
}

export default new Dialog();
