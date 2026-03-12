import { mount, unmount } from "svelte";
import { default as _Dialog } from "./Dialog.svelte";

/** @typedef {import("@kws3/ui/types").DialogProps} DialogProps */

function createDialog(msg, props) {
  props = Object.assign(props, { _text: msg });

  const promise = new Promise((fulfil) => {
    //@ts-ignore
    const dialog = mount(_Dialog, {
      target: document.body,
      props,
      intro: true,
      events: {
        _done: ({ detail }) => {
          fulfil(detail);
          unmount(dialog);
        },
      },
    });
  });

  return promise;
}

class Dialog {
  /**
   * @param {string} msg
   * @param {DialogProps} [props={}]
   */

  alert(msg, props = {}) {
    return createDialog(msg, { ...props, _type: "alert" });
  }

  /**
   * @param {string} msg
   * @param {DialogProps} [props={}]
   */
  prompt(msg, props) {
    return createDialog(msg, { ...props, _type: "prompt" });
  }

  /**
   * @param {string} msg
   * @param {DialogProps} [props={}]
   */
  confirm(msg, props) {
    return createDialog(msg, { ...props, _type: "confirm" });
  }
}

/**
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function alert(msg, props) {
  let dialog = new Dialog();
  return dialog.alert(msg, props);
}

/**
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function prompt(msg, props) {
  let dialog = new Dialog();
  return dialog.prompt(msg, props);
}

/**
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function confirm(msg, props) {
  let dialog = new Dialog();
  return dialog.confirm(msg, props);
}

export default new Dialog();
