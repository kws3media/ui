<Accordion>
  <AccordionItem class={klass} {color} {style}>
    <div slot="title">Slot Title 1</div>
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
      Open Slot Title 2
    </button>
  </AccordionItem>

  <AccordionItem
    bind:is_active={is_active_item_2}
    class={klass}
    {color}
    {style}>
    <div slot="title">Slot Title 2</div>
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
      Open Property Title
    </button>
  </AccordionItem>

  <AccordionItem
    bind:is_active={is_active_item_3}
    {title}
    {color}
    key="three"
    class={klass}
    {style}>
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

  export let color = "danger",
    title = "Property Title",
    style = "";

  let klass = "";
  export { klass as class };

  let is_active_item_2 = false;
  let is_active_item_3 = false;
</script>
