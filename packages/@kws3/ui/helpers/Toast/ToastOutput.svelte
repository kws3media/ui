{#each Object.keys($notifications) as position}
  <ToastBox {position}>
    {#each $notifications[position] as notification}
      {#if notification}
        <Toast {...notification} on:destroy={destroy} />
      {/if}
    {/each}
  </ToastBox>
{/each}

<script>
  import { notifications } from "./index";
  import Toast from "./Toast.svelte";
  import ToastBox from "./ToastBox.svelte";

  const destroy = ({ detail }) => Toast.close(detail);
</script>
