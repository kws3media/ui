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

<script context="module">
  import { ToastBox, ToastBoxes } from "@kws3/ui";

  //TODO: top and bottom position alignment
  if (!ToastBoxes.bottom) {
    ToastBoxes.bottom = new ToastBox({
      target: document.body,
      props: {
        position: "bottom",
      },
    });
  }
</script>

<script>
  import { ToastNotifications } from "@kws3/ui";

  function create(prop) {
    ToastNotifications.push({ message: "I am a Toast...", ...prop });
  }
</script>
