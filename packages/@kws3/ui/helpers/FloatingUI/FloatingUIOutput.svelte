<!--
  @component


  @param [_] - No properties on this component

-->
{#each Object.keys($FloatiesStore) as position}
  {#each Object.keys($FloatiesStore[position]) as variant}
    <div class="kws-floatie-output is-{position} is-{variant}-holder">
      {#each $FloatiesStore[position][variant] as item (item.id)}
        <div
          class="kws-floatie-item has-{variant} is-{item.position}"
          id={item.id}
          animate:flip={{ easing: sineOut }}
          transition:fly={{
            y: transitionDistance(item.position),
            duration: transitionDuration,
            easing: sineOut,
          }}>
          <Floatie {...item} on:destroy={destroy} />
        </div>
      {/each}
    </div>
  {/each}
{/each}

<script>
  //@ts-nocheck
  import { fly } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import { flip } from "svelte/animate";
  import { hasTransitions } from "../../settings";
  import { Floatie, FloatiesStore } from "@kws3/ui";

  const destroy = ({ detail }) => {
    FloatiesStore.remove(detail);
  };
  const transitionDistance = (position) =>
    position.indexOf("top") === 0 ? -50 : 50;

  $: transitionDuration = $hasTransitions ? 150 : 0;
</script>
