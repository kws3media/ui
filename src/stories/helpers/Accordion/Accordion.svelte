<div class="columns">
  <div class="column">
    {#if !title_click && !expanded}
      <button class="button is-primary" on:click={() => (expanded = true)}>
        Open Section 1
      </button>
    {/if}
  </div>
</div>

<Accordion>
  <AccordionItem
    bind:expanded
    title={"1 - " + title}
    class={klass}
    {color}
    {style}
    {title_click}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <span>felis venenatis</span>
    efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
    sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
    porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis
    sodales sem.
    <hr />
    <button
      class="button is-primary"
      on:click={() => (is_active_item_2 = true)}>
      Open Section 2
    </button>
  </AccordionItem>

  <AccordionItem
    bind:expanded={is_active_item_2}
    title={"2 - " + title}
    class={klass}
    {color}
    {style}
    {title_click}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong
      >Pellentesque risus mi</strong
    >, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
    amet fringilla. Nullam gravida purus diam, et dictum
    <span>felis venenatis</span>
    efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
    sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
    porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis
    sodales sem.
    <hr />
    <button
      class="button is-warning"
      on:click={() => (is_active_item_3 = true)}>
      Open Section 3
    </button>
  </AccordionItem>

  <AccordionItem
    bind:expanded={is_active_item_3}
    title={"3 - " + title}
    class={klass}
    {color}
    {style}
    {title_click}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong
      >Pellentesque risus mi</strong
    >, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
    amet fringilla. Nullam gravida purus diam, et dictum
    <span>felis venenatis</span>
    efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
    sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
    porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis
    sodales sem.
  </AccordionItem>
</Accordion>

<script>
  import { Accordion, AccordionItem } from "@kws3/ui";

  export let title = "Title",
    color = "primary",
    style = "",
    expanded = true,
    title_click = true;

  let klass = "";
  export { klass as class };

  let is_active_item_2 = false;
  let is_active_item_3 = false;
</script>
