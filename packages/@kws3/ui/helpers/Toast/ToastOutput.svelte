{#each Object.keys($notifications) as position}
  {#each Object.keys($notifications[position]) as variant}
    <div class="kws-toast-output is-{position} is-{variant}-holder">
      {#each $notifications[position][variant] as notification}
        {#if notification}
          <Toast {...notification} on:destroy={destroy} />
        {/if}
      {/each}
    </div>
  {/each}
{/each}

<script>
  import { notifications } from "./index";
  import Toast from "./Toast.svelte";

  const destroy = ({ detail }) => Toast.close(detail);
</script>
