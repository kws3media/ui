import Dialog from "./Dialog.svelte";

export function alert(msg, options) {
  console.log("alert: ", msg, options);
}

export function prompt(msg, options) {
  console.log("prompt: ", msg);
}

export function confirm(msg, options) {
  console.log("confirm: ", msg);
}

Dialog.alert = alert;
Dialog.confirm = confirm;
Dialog.prompt = prompt;

export default Dialog;
