import Toast from "./Toast.svelte";
import ToastOutput, { notifications } from "./ToastOutput.svelte";

const pushToast = (props) => notifications.push(props);
const closeToast = (props) => notifications.pop(props);

Toast.push = pushToast;
Toast.close = closeToast;

export { ToastOutput, pushToast, closeToast };
export default Toast;
