<div class="columns">
  <div class="column">
    <KwsActionSheet bind:open {closable} {style}>
      <h1>This is a Heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ul class="menu-list">
        <li><a href="void(0)">Menu 1</a></li>
        <li><a href="void(0)">Menu 2</a></li>
      </ul>

      <hr />
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
