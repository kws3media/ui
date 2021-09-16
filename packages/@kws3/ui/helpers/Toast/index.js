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

function getPosition(props) {
  return props.position && props.position.indexOf("top") === 0
    ? "top"
    : "bottom";
}

export function push(props) {
  notifications.push(props);
}

export function pop(props) {
  notifications.pop(props);
}

Toast.push = push;
Toast.pop = pop;

export { ToastBox, notifications as ToastNotifications };
export default Toast;
