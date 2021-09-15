<!--
  @component
  

  @param {string} [text=""] - New line `\n`  of the text will be replaced with line break `&lt;br/&gt;`, Default: `""`

-->
{#if text && text_parts}
  {#each text_parts as part, index}
    {part}{#if text_parts.length != index + 1}<br />{/if}
  {/each}
{/if}

<script>
  /**
   * New line `\n`  of the text will be replaced with line break `&lt;br/&gt;`
   */
  export let text = "";
  $: text_parts = text.split("\n");
</script>
