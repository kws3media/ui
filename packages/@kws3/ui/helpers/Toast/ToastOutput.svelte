{#each Object.keys($notifications) as position}
  <div class="kws-toast-output is-{position}" id="toast-box-{position}">
    {#each $notifications[position] as notification}
      {#if notification}
        <Toast {...notification} on:destroy={destroy} />
      {/if}
    {/each}
  </div>
{/each}

<script>
  import { notifications } from "./index";
  import Toast from "./Toast.svelte";

  const destroy = ({ detail }) => Toast.close(detail);
</script>
