<KwsActionSheet
  bind:is_active
  {closable}
  {close_on_click_outside}
  {inner_class}
  {inner_style}
  {style}
  class={klass}>
  <h1 class="title">This is a Heading</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <ul class="menu-list">
    <li><a href={"javascript:void(0)"}>Menu 1</a></li>
    <li><a href={"javascript:void(0)"}>Menu 2</a></li>
  </ul>

  <hr class="is-small" />
  <button
    class="button is-danger is-fullwidth"
    type="button"
    on:click={() => (is_active = false)}>Close Action Sheet</button>
</KwsActionSheet>

<button
  class="button is-primary"
  type="button"
  on:click={() => (is_active = true)}>Open Action Sheet</button>

<script>
  import { ActionSheet as KwsActionSheet } from "@kws3/ui";
  export let is_active = false,
    closable = true,
    close_on_click_outside = true,
    style = "",
    inner_class = "",
    inner_style = "";

  let klass = "";
  export { klass as class };
</script>
