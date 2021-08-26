<!--
 @component
  This is a modal component with card body.

  If you want a more classic modal, with a head, a body and a foot, use this.

  see more details on https://bulma.io/documentation/components/modal/#modal-card

  The modal structure is very simple:

  - modal: the main container
  - modal-background: a transparent overlay that can act as a click target to close the modal
  - modal-content: a horizontally and vertically centered container, with a maximum width of 640px, in which you can include any content
  - modal-close: a simple cross located in the top right corner
-->

<div
  class="modal {classes} {is_active ? 'is-active' : ''}"
  style="{style}"
  data-cy="{cy}">
  <div class="modal-background" on:click="{clickOutside}"></div>

  <div class="modal-card is-{size} {inner_class}" style="{inner_style}">
    <div class="modal-card-head">
      <div class="modal-card-title">
        <slot name="title">{title}</slot>
      </div>
      {#if closable}
        <button
          class="delete"
          type="button"
          on:click="{() => (is_active = false)}"></button>
      {/if}
    </div>

    <div class="modal-card-body">
      <slot />
    </div>

    {#if has_footer}
      <div class="modal-card-foot">
        <slot name="footer" />
      </div>
    {/if}
  </div>
</div>

<script>
  export let title = "",
    size = "",
    is_active = false,
    closable = true,
    close_on_click_outside = false,
    has_footer = true,
    style = "",
    inner_style = "",
    classes = "",
    inner_class = "",
    cy = "";

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }
</script>
