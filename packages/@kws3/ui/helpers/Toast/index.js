import Toast from "./Toast.svelte";
import { writable, get } from "svelte/store";
import {
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
} from "../../settings";

const DEFAULT_POSITIONS = {
  notification: get(defaultNotificationPlacement),
  snackbar: get(defaultSnackbarPlacement),
  toast: get(defaultToastPlacement),
};

const getPosition = (props) => {
  if (props.position) {
    return props.position.indexOf("top") === 0 ? "top" : "bottom";
  }
  if (DEFAULT_POSITIONS[props.variant]) {
    return DEFAULT_POSITIONS[props.variant].indexOf("top") === 0
      ? "top"
      : "bottom";
  }
  return "top";
};

export const notifications = (() => {
  const { update, subscribe } = writable({
    top: {
      notification: [],
      snackbar: [],
      toast: [],
    },
    bottom: {
      notification: [],
      snackbar: [],
      toast: [],
    },
  });

  const push = (newItem) => {
    update((items) => {
      //verify we have a correct variant
      if (!newItem.variant) {
        newItem.variant = "notification";
      }
      if (!["notification", "snackbar", "toast"].includes(newItem.variant)) {
        newItem.variant = "notification";
      }

      if (!newItem.id) {
        newItem.id = `__kws_${newItem.variant}_${new Date().getTime()}`;
      }

      items[getPosition(newItem)][newItem.variant].push(newItem);

      return items;
    });
  };

  const pop = (props) => {
    update((items) => {
      let _position = getPosition(props);
      let _variant = props.variant;
      let _items = items[_position][_variant];
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

      items[_position][_variant] = _items;

      return items;
    });
  };

  return { pop, push, subscribe };
})();

export const pushToast = (props) => notifications.push(props);
export const closeToast = (props) => notifications.pop(props);

Toast.push = pushToast;
Toast.close = closeToast;

export default Toast;
