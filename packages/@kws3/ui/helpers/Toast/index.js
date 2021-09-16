import Toast from "./Toast.svelte";
import ToastOutput, { notifications } from "./ToastOutput.svelte";

const push = (props) => {
  notifications.push(props);
  return { props, close };
};

const close = (props) => notifications.pop(props);

Toast.push = push;
Toast.close = close;

export { ToastOutput };
export default Toast;
