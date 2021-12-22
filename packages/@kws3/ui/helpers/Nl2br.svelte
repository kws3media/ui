<!--
  @component


  @param {string} [text=""] - Text to process and output, Default: `""`

-->
{#if text && text_parts}
  {#each text_parts as part, index}
    {part}{#if text_parts.length != index + 1}<br />{/if}
  {/each}
{/if}

<script>
  /**
   * Text to process and output
   */
  export let text = "";
  $: text_parts = text && typeof text == "string" ? text.split("\n") : "";
</script>
