<section class="accordions {klass}" {style}>
  <slot />
</section>

<script>
  export let style = "";

  let klass = "";
  export { klass as class };
</script>
