import FloatingUIOutput from "./FloatingUIOutput.svelte";
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

let OUTPUT_IS_ON_PAGE = false;

function ensureOutputIsOnPage() {
  if (OUTPUT_IS_ON_PAGE) {
    return;
  }

  //@ts-ignore
  OUTPUT_IS_ON_PAGE = new FloatingUIOutput({
    target: document.body,
  });
}

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

export const FloatiesStore = (() => {
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

  const create = (newItem) => {
    update((items) => {
      ensureOutputIsOnPage();

      //verify we have a correct variant
      if (!newItem.variant) {
        newItem.variant = "notification";
      }
      if (!["notification", "snackbar", "toast"].includes(newItem.variant)) {
        newItem.variant = "notification";
      }

      if (!newItem.position || newItem.position === "") {
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
      destroy: () => remove(newItem),
    };
  };

  const remove = (props) => {
    update((items) => {
      let _position = getPosition(props);
      let _variant = props.variant;
      let _items = items[_position][_variant];

      items[_position][_variant] = _items.slice().filter((el) => {
        return el && el.id && el.id !== props.id;
      });

      return items;
    });
  };

  return { create, remove, subscribe };
})();

const buildInitialiser = (defaultOpts, mandatoryOpts) => {
  return (opts) => {
    let _opts = Object.assign({}, defaultOpts, opts, mandatoryOpts);
    return FloatiesStore.create(_opts);
  };
};

/**
 * @typedef {import("@kws3/ui/types").FloatieType} FloatieType
 */

/**
 * @type {FloatieType}
 */
export const Notifications = {
  create: buildInitialiser(
    {
      //default Options
      position: DEFAULT_POSITIONS["notification"],
      dismissable: true,
      persistent: false,
    },
    {
      //mandatory options
      variant: "notification",
    }
  ),
  remove: FloatiesStore.remove,
};

/**
 * @type {FloatieType}
 */
export const Toasts = {
  create: buildInitialiser(
    {
      //default Options
      position: DEFAULT_POSITIONS["toast"],
    },
    {
      //mandatory options
      variant: "toast",
      dismissable: true,
      persistent: false,
      title: "",
    }
  ),
  remove: FloatiesStore.remove,
};

/**
 * @type {FloatieType}
 */
export const Snackbars = {
  create: buildInitialiser(
    {
      //default Options
      position: DEFAULT_POSITIONS["snackbar"],
      dismissable: true,
      persistent: false,
    },
    {
      //mandatory options
      variant: "snackbar",
      title: "",
    }
  ),
  remove: FloatiesStore.remove,
};
