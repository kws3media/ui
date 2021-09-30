<!--
  @component


  @param {string} [title=""] - Title for the component, Default: `""`
  @param {string} [style=""] - Inline CSS for the component, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color of the component, Default: `"primary"`
  @param {boolean} [expanded=false] - Determines whether Accordion has one item expanded, Default: `false`
  @param {boolean} [title_click=true] - Allows items in Accordion to be expanded or collapsed by clicking the item title, Default: `true`
  @param {any} [context=undefined] - A unique context value, Default: `undefined`
  @param {string} [class=""] - CSS classes for the component, Default: `""`

  ### Events
  - `change` - Fires an event on any change initiated by the user

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
  <div class="accordion-body" transition:slide>
    <div class="accordion-content">
      <!--Content slot-->
      <slot />
    </div>
  </div>
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
   * Title for the component
   */
  export let title = "",
    /**
     * Inline CSS for the component
     */
    style = "",
    /**
     * Color of the component
     * @type {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Determines whether Accordion has one item expanded
     */
    expanded = false,
    /**
     * Allows items in Accordion to be expanded or collapsed by clicking the item title
     */
    title_click = true,
    /**
     * A unique context value
     */
    context = `__kws_accordion_item_${Math.random().toString(36)}`;

  /**
   * CSS classes for the component
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
     * Fires an event on any change initiated by the user
     */
    fire("change", { context });
    expanded = false;
  }
</script>
