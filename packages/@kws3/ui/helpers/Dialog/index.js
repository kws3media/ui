import Dialog from "./Dialog.svelte";

function createDialog(msg, props) {
  props = Object.assign(props, { _text: msg });

  const promise = new Promise((fulfil) => {
    const dialog = new Dialog({
      target: document.body,
      props,
      intro: true,
    });

    dialog.$on("_done", ({ detail }) => {
      fulfil(detail);
      //Does not outro out because of
      //https://github.com/sveltejs/svelte/issues/4056
      dialog.$destroy();
    });
  });

  return promise;
}

export function alert(msg, props) {
  props = props || {};
  props._type = "alert";
  return createDialog(msg, props);
}

export function prompt(msg, props) {
  props = props || {};
  props._type = "prompt";
  return createDialog(msg, props);
}

export function confirm(msg, props) {
  props = props || {};
  props._type = "confirm";
  return createDialog(msg, props);
}

Dialog.alert = alert;
Dialog.confirm = confirm;
Dialog.prompt = prompt;

export default Dialog;
