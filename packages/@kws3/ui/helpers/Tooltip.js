import { delegate } from "tippy.js";

/**
 * Activates tooltips via event delegation
 * @param {string} container - CSS selector of container
 * @param {object} opts - tooltip options
 */
export default function (container, opts) {
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
