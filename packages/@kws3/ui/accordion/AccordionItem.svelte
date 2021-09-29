<!--
  @component


  @param {string} [title=""] - Title for the item, Default: `""`
  @param {string} [style=""] - CSS styles for the item, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color for the item, Default: `"primary"`
  @param {boolean} [expanded=false] - If it is true, it will expand one item, Default: `false`
  @param {boolean} [title_click=true] - If it is true, it allow toggle section by click on its title, Default: `true`
  @param {any} [context=undefined] - A unique context value, Default: `undefined`
  @param {string} [class=""] - CSS classes for the item, Default: `""`

  ### Events
  - `change` - This will fire an event on change

  ### Slots
  - `<slot name="title"  />` - Title slot
  - `<slot name="default"  />` - Content slot

-->

<article
  class="accordion {active ? 'is-active' : ''} is-{color} {klass}"
  {style}>
  <div
    class="accordion-header {title_click ? ' toggle' : ''}"
    on:click={() => {
      if (title_click) onToggle();
    }}>
    <div class="field is-grouped" style="align-items: center">
      <div class="control is-expanded">
        <!--Title slot-->
        <slot name="title">{title}</slot>
      </div>
      <div class="control">
        <Icon icon="{active ? 'minus' : 'plus'}-circle" size="small" />
      </div>
    </div>
  </div>
  {#if active}
    <div class="accordion-body" transition:slide>
      <div class="accordion-content">
        <!--Content slot-->
        <slot />
      </div>
    </div>
  {/if}
</article>

<script>
  import { Icon } from "@kws3/ui";
  import { slide } from "svelte/transition";
  import {
    onMount,
    afterUpdate,
    createEventDispatcher,
    getContext,
  } from "svelte";

  const fire = createEventDispatcher();
  const { items, add, remove, toggle } = getContext("kws-accordion");

  /**
   * Title for the item
   */
  export let title = "",
    /**
     * CSS styles for the item
     */
    style = "",
    /**
     * Color for the item
     * @type {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * If it is true, it will expand one item
     */
    expanded = false,
    /**
     * If it is true, it allow toggle section by click on its title
     */
    title_click = true,
    /**
     * A unique context value
     */
    context = `__kws_accordion_item_${Math.random().toString(36)}`;

  /**
   * CSS classes for the item
   */
  let klass = "";
  export { klass as class };

  let unsubscribe,
    active = false;

  $: {
    add({ context, active });
    unsubscribe = items.subscribe((item) => {
      active = item[context];
    });
  }

  onMount(() => {
    return () => {
      remove && remove({ context });
      unsubscribe && unsubscribe();
    };
  });

  afterUpdate(() => {
    if (expanded === true) onToggle();
  });

  function onToggle() {
    toggle({ context, active: !active });
    /**
     * This will fire an event on change
     */
    fire("change", { context });
    expanded = false;
  }
</script>
