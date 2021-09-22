<span
  data-info-bubble={external_target ? external_target : id}
  data-render-component={render_component ? "true" : "false"}
  data-tippy-trigger={trigger}
  data-tippy-placement={placement}
  data-tippy-offset="[0, 10]"
  data-tippy-interactive={interactive}
  style={_style}>
  <slot><Icon {icon} color={icon_color} size={icon_size} /></slot>
</span>
<div class="is-hidden" {id}>
  <div class="tt-body">
    <slot name="popover" />
  </div>
</div>

<script context="module">
  import { activateTooltips } from "@kws3/ui";
  console.log("activating popovers");
  activateTooltips("html", {
    target: "[data-info-bubble]",
    appendTo: () => document.body,
    content: "...",
    onShow(instance) {
      let { reference, popper } = instance,
        id = reference.getAttribute("data-info-bubble"),
        render_component = reference.getAttribute("data-render-component"),
        target = popper.querySelector(".tippy-content");

      instance.__component && instance.__component.destroy();
      instance.__component = null;
      instance.setContent("");

      if (render_component == "true") {
        let component = new StockTooltip({
          store,
          target,
          data: { identifier: id },
        });
        instance.__component = component;
      } else {
        let template = document.getElementById(id),
          content = template.innerHTML;
        instance.setContent(content);
      }
    },
    // onShown(instance){
    //   let {popper} = instance;
    //   popper.addEventListener('click', MakePopupInteractive);
    // },
    onHidden(instance) {
      instance.__component && instance.__component.destroy();
      instance.__component = null;
    },
    maxWidth: "none",
    hideOnClick: true,
    theme: "infobubble",
    interactive: true,
    animation: "scale",
    allowHTML: true,
    inertia: true,
    offset: [0, 0],
    touch: true,
  });
</script>

<script>
  import { Icon } from "@kws3/ui";

  export let icon = "info-circle";
  export let icon_color = "grey";
  export let icon_size = "small";
  export let trigger = "click";
  export let placement = "auto";
  export let interactive = "false";
  export let external_target = null;
  export let render_component = false;
  export let style = "";

  let id = "__popover__" + (Math.random() * Math.pow(10, 8)).toFixed(0);

  $: _style = `cursor:pointer;${style}`;
</script>
