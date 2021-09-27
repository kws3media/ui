<Accordion>
  <AccordionItem
    expanded={active_item_1}
    {color}
    key="one"
    {allow_header_click}
    {item_class}
    {item_style}>
    <div slot="header">Slot Title 1</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong
      >Pellentesque risus mi</strong
    >, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
    amet fringilla. Nullam gravida purus diam, et dictum
    <span>felis venenatis</span>
    efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
    sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
    porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis
    sodales sem.
    <button on:click={() => activateSectionTwo()}>Open 2nd Item</button>
  </AccordionItem>
  <AccordionItem
    {color}
    key="two"
    bind:expanded={active_item_2}
    {allow_header_click}
    {item_class}
    {item_style}>
    <div slot="header">Slot Title 2</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong
      >Pellentesque risus mi</strong
    >, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
    amet fringilla. Nullam gravida purus diam, et dictum
    <span>felis venenatis</span>
    efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
    sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
    porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis
    sodales sem.
    <button on:click={() => activateSectionThree()}>Open 3rd Item</button>
  </AccordionItem>
  <AccordionItem
    {header}
    {color}
    key="three"
    bind:expanded={active_item_3}
    {allow_header_click}
    {item_class}
    {item_style}>
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
    allow_header_click = true,
    header = "Property Title",
    item_class = "",
    item_style = "";
  let item = null;
  let active_item_1 = true;
  let active_item_2 = false;
  let active_item_3 = false;

  function activateSectionTwo() {
    active_item_2 = true;
  }
  function activateSectionThree() {
    active_item_3 = true;
  }
</script>
