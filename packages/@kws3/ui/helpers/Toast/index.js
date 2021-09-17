import Toast, { setDefaultPlacement, globalPosition } from "./Toast.svelte";
import ToastOutput from "./ToastOutput.svelte";
import { writable } from "svelte/store";

const getPosition = (props) => {
  if (props.position) {
    return props.position.indexOf("top") === 0 ? "top" : "bottom";
  }
  if (globalPosition) {
    return globalPosition.indexOf("top") === 0 ? "top" : "bottom";
  }
  return "bottom";
};

export const notifications = (() => {
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
      let _position = getPosition(props);
      let _items = items[_position];
      let _index;

      _items.forEach((e, i) => {
        if (e && e.id == props.id) {
          _index = i;
          return;
        }
      });

      if (typeof _index != "undefined") {
        delete _items[_index];
      }

      //reset the array index to 0
      let _filterdItems = _items.filter((i) => i);
      if (!_filterdItems.length) _items = [];

      items[_position] = _items;

      return items;
    });
  };

  return { pop, push, subscribe };
})();

export const pushToast = (props) => notifications.push(props);
export const closeToast = (props) => notifications.pop(props);

Toast.push = pushToast;
Toast.close = closeToast;
Toast.setDefaultPlacement = setDefaultPlacement;

export { ToastOutput };
export default Toast;
