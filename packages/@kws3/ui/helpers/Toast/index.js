import Toast from "./Toast.svelte";
import ToastBox from "./ToastBox.svelte";

let boxes = [];

if (!boxes.top) {
  boxes.top = new ToastBox({
    target: document.body,
    props: {
      position: "top",
    },
  });
}

if (!boxes.bottom) {
  boxes.bottom = new ToastBox({
    target: document.body,
    props: {
      position: "bottom",
    },
  });
}

Toast.push = (props) => {
  let position = props.position,
    box = "bottom";

  if (position && position.indexOf("top") === 0) box = "top";

  const toast = new Toast({
    target: document.querySelector(`#toast-box-${box}`),
    props,
  });

  toast.$on("destroy", ({ detail }) => {
    toast.$destroy();
  });
};

export default Toast;
