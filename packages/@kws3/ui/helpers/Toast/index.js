import Toast from "./Toast.svelte";

Toast.create = (props) => {
  if (typeof props === "string") props = { message: props };

  const toast = new Toast({
    target: document.body,
    props,
    intro: true,
  });

  toast.$on("destroy", () => toast.$destroy());

  return toast;
};

export default Toast;
