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
      <KwsTransition
        type="fly"
        {duration}
        {x}
        {y}
        class={klass}
        {transition}
        {delay}
        {easing}>
        <Message color="info">Fly</Message>
      </KwsTransition>
    </div>
    <div class="column is-3">
      <KwsTransition
        type="fade"
        {duration}
        class={klass}
        {transition}
        {delay}
        {easing}>
        <Message color="warning">Fade</Message>
      </KwsTransition>
    </div>
    <div class="column is-3">
      <KwsTransition
        type="slide"
        {duration}
        class={klass}
        {transition}
        {delay}
        {easing}>
        <Message color="primary">Slide</Message>
      </KwsTransition>
    </div>
    <div class="column is-3">
      <KwsTransition
        type="scale"
        {duration}
        {from}
        {to}
        class={klass}
        {transition}
        {delay}
        {easing}>
        <Message color="light">Scale</Message>
      </KwsTransition>
    </div>
  </div>
{/if}

<script>
  //@ts-nocheck
  import { Transition as KwsTransition, Message, Checkbox } from "@kws3/ui";
  let show_transition = false;

  export let x = 0,
    y = 20,
    from = 0.5,
    to = 1,
    transition = true,
    duration = 1000,
    delay = 0,
    easing = "";

  let klass = "";
  export { klass as class };
</script>
