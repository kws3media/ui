<KwsAccordion>
  <AccordionItem active={true} {color}>
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
  </AccordionItem>
  <AccordionItem {color}>
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
  </AccordionItem>
  <AccordionItem header="Property Title" {color}>
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
</KwsAccordion>

<script>
  import { Accordion as KwsAccordion, AccordionItem } from "@kws3/ui";
  export let color = "danger";
</script>
