import tippy from "tippy.js";

export default function (node, opts) {
  let instance;

  function makeOptions() {
    return Object.assign(
      {
        appendTo: () => document.body,
        hideOnClick: true,
        theme: "popover",
        animation: "scale",
        allowHTML: true,
        inertia: true,
        touch: true,
        placement: "auto",
        trigger: "click",
        offset: [0, 10],
        interactive: true,
        maxWidth: "none",
      },
      opts
    );
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

  return {
    update(_opts) {
      opts = _opts;
      remakeInstance();
    },
    destroy() {
      destroyInstance();
    },
  };
}
