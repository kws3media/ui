import Toast from "./Toast.svelte";
import ToastBox from "./ToastBox.svelte";
import { writable } from "svelte/store";

const notifications = (() => {
  const { update, subscribe } = writable({
    top: [],
    bottom: [],
  });

  const push = (newItem) => {
    update((items) => {
      if (!newItem.id) newItem.id = new Date().getTime();
      items[getPosition(newItem)].push(newItem);
      return items;
    });
  };

  const pop = (props) => {
    update((items) => {
      //TODO: filter array index making issue

      let _position = getPosition(props);
      let _items = items[_position];
      _items = _items.filter((i) => i.id != props.id);
      items[_position] = _items;

      return items;
    });
  };

  return { pop, push, subscribe };
})();

const boxes = [];

function getPosition(props) {
  return props.position && props.position.indexOf("top") === 0
    ? "top"
    : "bottom";
}

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
  notifications.pop(props);
}

export async function create(props) {
  let boxPosition = getPosition(props);

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
