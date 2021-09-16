import Toast from "./Toast.svelte";
import ToastBox from "./ToastBox.svelte";
import ToastOutput, { notifications } from "./ToastOutput.svelte";

export function push(props) {
  notifications.push(props);

  return { props, close };
}

const close = (props) => notifications.pop(props);

Toast.push = push;
Toast.close = close;

export { ToastBox, ToastOutput, notifications as ToastNotifications };
export default Toast;
