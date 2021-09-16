import Toast from "./Toast.svelte";
import ToastBox from "./ToastBox.svelte";
import ToastOutput, { notifications } from "./ToastOutput.svelte";

export function push(props) {
  notifications.push(props);
}

export function pop(props) {
  notifications.pop(props);
}

Toast.push = push;
Toast.pop = pop;

export { ToastBox, ToastOutput, notifications as ToastNotifications };
export default Toast;
