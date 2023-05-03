import tippy, { delegate } from "tippy.js";

/**
 * @typedef {import('@kws3/ui/types').TippyPositions} TippyPositions
 */

/**
 * Activates tooltips via event delegation
 * @param {string} container - CSS selector of container
 * @param {object} opts - tooltip options
 */
export function activateTooltips(container, opts = {}) {
  let _opts = Object.assign(
    {
      target: "[data-tooltip]",
      animation: "scale",
      content(el) {
        return el.getAttribute("data-tooltip");
      },
      allowHTML: true,
      inertia: true,
      offset: [0, 15],
      touch: true,
    },
    opts
  );

  delegate(container, _opts);
}

function createTippyAction(defaultOpts) {
  return function (node, opts) {
    let instance;

    function makeOptions() {
      return Object.assign({}, defaultOpts, opts, {
        onShow(instance) {
          dispatch("showing", { instance });
        },
        onShown(instance) {
          dispatch("shown", { instance });
        },
        onHide(instance) {
          dispatch("hiding", { instance });
        },
        onHidden(instance) {
          dispatch("hidden", { instance });
        },
        onTrigger(instance) {
          dispatch("triggered", { instance });
        },
      });
    }

    function remakeInstance() {
      destroyInstance();
      makeInstance();
    }

    function destroyInstance() {
      instance && instance.destroy();
    }

    function makeInstance() {
      const options = makeOptions();
      if (!options.content) {
        return;
      }
      instance = tippy(node, options);
    }

    makeInstance();

    function dispatch(type, detail) {
      const e = new CustomEvent(type, { bubbles: false, detail });
      node.dispatchEvent(e);
    }

    return {
      update(_opts) {
        opts = _opts;
        remakeInstance();
      },
      destroy() {
        destroyInstance();
      },
    };
  };
}

/**
 * @type {import("svelte/action").Action}
 */
export let popover = createTippyAction({
  appendTo: () => document.body,
  hideOnClick: true,
  theme: "popover",
  animation: "scale",
  allowHTML: true,
  inertia: true,
  touch: true,
  /**
   * @type {TippyPositions}
   */
  placement: "auto",
  trigger: "click",
  offset: [0, 10],
  interactive: true,
  maxWidth: "none",
});

/**
 * @type {import("svelte/action").Action}
 */
export let tooltip = createTippyAction({
  animation: "scale",
  content(el) {
    return el.getAttribute("data-tooltip");
  },
  allowHTML: true,
  inertia: true,
  offset: [0, 15],
  touch: true,
});
