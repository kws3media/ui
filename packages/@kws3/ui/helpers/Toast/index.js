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

      if (!newItem.position || newItem.position == "") {
        newItem.position = DEFAULT_POSITIONS[newItem.variant];
      }

      if (!newItem.id) {
        newItem.id = `__kws_${newItem.variant}_${new Date().getTime()}`;
      }

      items[getPosition(newItem)][newItem.variant].push(newItem);

      return items;
    });

    return {
      props: newItem,
      destroy: () => pop(newItem),
    };
  };

  const pop = (props) => {
    update((items) => {
      let _position = getPosition(props);
      let _variant = props.variant;
      let _items = items[_position][_variant];

      items[_position][_variant] = _items.slice().filter((el) => {
        return el && el.id && el.id != props.id;
      });

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
