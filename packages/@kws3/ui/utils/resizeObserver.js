export const hasResizeObserver = typeof window.ResizeObserver != "undefined";

export function resizeObserver(node) {
  let ro;
  if (hasResizeObserver) {
    ro = new ResizeObserver(() => {
      const e = new CustomEvent("resize", { bubbles: false });
      node.dispatchEvent(e);
    });

    ro.observe(node);
  }

  return {
    destroy() {
      hasResizeObserver && ro.disconnect();
    },
  };
}
