import Toasts, { notifications, elements } from "./Toasts.svelte";

if (!elements.length) {
  const element = new Toasts({
    target: document.body,
    props: {
      position: "top",
    },
  });
  elements.push(element);
}

export { notifications as Toast };
export default Toasts;
