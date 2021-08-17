<pre><code class="lang-{lang}" bind:this={codearea}><slot></slot></code></pre>

<script>
import { onMount } from "svelte";
//import Prism from 'prismjs';

export let lang = 'html';
export let codearea;
const __this = {};

/*onMount(() => {
  setTimeout(() => {
      codearea && Prism.highlightElement(codearea);
    }, 0);
});*/
</script>