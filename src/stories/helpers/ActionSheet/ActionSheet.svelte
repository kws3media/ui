<div class="columns">
  <div class="column">
    <KwsActionSheet bind:open {closable} {style}>
      <h1 class="title">This is a Heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ul class="menu-list">
        <li><button class="button is-outlined">Menu 1</button></li>
        <li><button class="button is-outlined">Menu 2</button></li>
      </ul>

      <hr class="is-small" />
      <button
        class="button is-danger is-fullwidth"
        type="button"
        on:click={() => (open = false)}>Close Action Sheet</button>
    </KwsActionSheet>
  </div>
</div>

<button class="button is-primary" type="button" on:click={() => (open = true)}
  >Open Action Sheet</button>

<script>
  import { ActionSheet as KwsActionSheet } from "@kws3/ui";
  export let open = false,
    closable = true,
    style = "";
</script>
