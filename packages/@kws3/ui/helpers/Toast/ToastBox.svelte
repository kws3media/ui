<!--
  @component

  @param {string} [position="bottom"] - Position property, Default: `"bottom"`

  ### Slots
  - `<slot name="default"  />`
-->

<div class="toast-box is-{position}" id="toast-box-{position}">
  <slot />
</div>

<script>
  export let position = "bottom";
</script>
