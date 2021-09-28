{#each Object.keys($notifications) as position}
  {#each Object.keys($notifications[position]) as variant}
    <div class="kws-toast-output is-{position} is-{variant}-holder">
      {#each $notifications[position][variant] as item (item.id)}
        <div
          class="kws-toast-item is-{item.position}"
          id={item.id}
          animate:flip={{ easing: sineOut }}
          transition:fly={{
            y: transitionDistance(item.position),
            duration: transitionDuration,
            easing: sineOut,
          }}>
          <Toast {...item} on:destroy={destroy} />
        </div>
      {/each}
    </div>
  {/each}
{/each}

<script>
  import { fly } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import { flip } from "svelte/animate";
  import { notifications } from "./index";
  import { hasTransitions } from "../../settings";
  import Toast from "./Toast.svelte";

  const destroy = ({ detail }) => Toast.close(detail);
  const transitionDistance = (position) =>
    position.indexOf("top") === 0 ? -50 : 50;

  $: transitionDuration = $hasTransitions ? 150 : 0;
</script>
