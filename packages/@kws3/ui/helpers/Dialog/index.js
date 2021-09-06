import Dialog from "./Dialog.svelte";

export function alert() {}

export function prompt() {}

export function confirm() {}

Dialog.alert = alert;
Dialog.confirm = confirm;
Dialog.prompt = prompt;

export default Dialog;
