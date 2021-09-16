import Toast from "./Toast.svelte";
import ToastBox from "./ToastBox.svelte";
import { writable } from "svelte/store";

const notifications = (() => {
  const { update, subscribe } = writable([]);

  const push = (newItem) => {
    update((items) => {
      if (!newItem.id) newItem.id = new Date().getTime();
      return [...items, newItem];
    });
  };

  const pop = (id) => {
    update((items) => {
      let _items = [];

      //TODO: filter this array properlly
      items.forEach((e, i) => {
        if (e && e.id != id) _items[i] = e;
      });

      return _items;
    });
  };

  return { pop, push, subscribe };
})();

const boxes = [];

async function setBoxes(position) {
  switch (position) {
    case "top":
      if (!boxes.top) {
        boxes.top = new ToastBox({
          target: document.body,
          props: {
            position: "top",
          },
        });
      }
      break;
    case "bottom":
      if (!boxes.bottom) {
        boxes.bottom = new ToastBox({
          target: document.body,
          props: {
            position: "bottom",
          },
        });
      }
      break;
  }
}

export function push(props) {
  notifications.push(props);
}

export function pop(props) {
  notifications.pop(props.id);
}

export async function create(props) {
  let boxPosition = "bottom";

  if (props.position && props.position.indexOf("top") === 0)
    boxPosition = "top";

  await setBoxes(boxPosition);

  const toast = new Toast({
    target: document.querySelector(`#toast-box-${boxPosition}`),
    props,
  });

  toast.$on("destroy", ({ detail }) => {
    toast.$destroy();
  });
}

Toast.push = push;
Toast.pop = pop;
Toast.create = create;

export { ToastBox, notifications as ToastNotifications };
export default Toast;
