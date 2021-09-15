<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={create}
      >Create Toast</button>
  </div>
</div>

<script context="module">
  import { ToastBox, ToastBoxes } from "@kws3/ui";

  if (!ToastBoxes.length) {
    const box = new ToastBox({
      target: document.body,
      props: {
        position: "top",
      },
    });
    ToastBoxes.push(box);
  }
</script>

<script>
  import { ToastNotifications } from "@kws3/ui";

  function create() {
    ToastNotifications.push({ message: "I am a Toast..." });
  }
</script>
