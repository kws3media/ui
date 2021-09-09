<div class="columns">
  <div class="column">
    <div class="field">
      <div class="control">
        <Checkbox bind:checked={show_transition}>Show/Hide</Checkbox>
      </div>
    </div>
  </div>
</div>
{#if show_transition}
  <div class="columns">
    <div class="column is-3">
      <KwsTransition type="fly" duration={500} x={0} y={20} class={klass}>
        <Message color="info">Fly</Message>
      </KwsTransition>
    </div>
    <div class="column is-3">
      <KwsTransition type="fade" duration={500} class={klass}>
        <Message color="warning">Fade</Message>
      </KwsTransition>
    </div>
    <div class="column is-3">
      <KwsTransition type="slide" duration={500} class={klass}>
        <Message color="primary">Slide</Message>
      </KwsTransition>
    </div>
    <div class="column is-3">
      <KwsTransition
        type="scale"
        duration={500}
        from={0.5}
        to={1}
        class={klass}>
        <Message color="light">Scale</Message>
      </KwsTransition>
    </div>
  </div>
{/if}

<script>
  import { Transition as KwsTransition, Message, Checkbox } from "@kws3/ui";
  let show_transition = false;

  /*export let x = 0,
    y = 20,
    from = 0.5,
    to = 1,
    transition = true,
    type = "fly",
    duration = 300,
    delay = 0,
    easing = null,
    classes = "";*/

  let klass = "";
  export { klass as class };
</script>
