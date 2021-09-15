<div class="columns">
  <div class="column has-text-centered">
    <button
      class="button is-primary"
      type="button"
      on:click={() => create({ position: "bottom-left" })}
      >Toast Bottom Right</button>
  </div>
  <div class="column has-text-centered">
    <button
      class="button is-info"
      type="button"
      on:click={() => create({ position: "bottom-right" })}
      >Toast Bottom left</button>
  </div>
</div>

<ToastBox position="bottom" />

<script>
  import { ToastBox, ToastNotifications } from "@kws3/ui";

  function create(prop) {
    ToastNotifications.push({ message: "I am a Toast...", ...prop });
  }
</script>
