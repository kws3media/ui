{#if title}
  <h4 class="title is-5 is-marginless">{title}</h4>
{/if}

<div class="field is-grouped is-marginless" style="align-items:center;">
  <div class="control is-expanded">
    <p>{@html message}</p>
  </div>
  <div class="control">
    <button class="button is-danger is-small" type="button" on:click={close}
      >Close</button>
  </div>
</div>

<script>
  import { closeToast } from "@kws3/ui";

  export let title = "",
    message = "";

  const close = () => {
    closeToast($$props);
    //do something else here
  };
</script>
