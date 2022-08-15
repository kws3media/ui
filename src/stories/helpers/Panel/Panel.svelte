<KwsPanel
  {title}
  {subtitle}
  class={klass}
  {style}
  {inner_class}
  {inner_style}
  {cy}
  {collapse_icon}
  {collapsible}
  {collapsed}
  {relative}
  {has_toolbar}
  {has_center}
  {has_title}>
  <h1>This is a demo panel</h1>
  <p>Lorem ipsum dolor sit amet consectetur.</p>
</KwsPanel>

<script>
  import { Panel as KwsPanel } from "@kws3/ui";
  export let title = "Demo Panel",
    subtitle = "",
    style = "",
    inner_class = "",
    inner_style = "",
    cy = "",
    collapse_icon = "caret-right",
    collapsible = false,
    collapsed = false,
    relative = false,
    has_toolbar = true,
    has_center = true,
    has_title = false;

  let klass = "is-primary";
  export { klass as class };
</script>
