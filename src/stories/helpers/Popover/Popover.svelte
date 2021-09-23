<div class="columns">
  <div class="column">
    <KwsPopover
      class={klass}
      {icon}
      {icon_color}
      {icon_size}
      {style}
      {trigger}
      {placement}
      {interactive}
      {max_width}>
      <svelte:fragment slot="popover">
        <Message>
          Make <code>interactive: true</code> and you can click the button below
          <br /><br />
          <button
            class="button is-small"
            on:click={() => Dialog.alert("Clicked!!!")}
            >Try to click me!</button>
        </Message>
      </svelte:fragment>
    </KwsPopover>
  </div>
  <div class="column">
    <KwsPopover
      class={klass}
      {icon}
      {icon_color}
      {icon_size}
      {style}
      {trigger}
      {placement}
      {interactive}
      {max_width}
      external_target={notif}>
      <svelte:fragment slot="popover">
        <Message>
          Make <code>interactive: true</code> and you can click the button below
          <br /><br />
          <button
            class="button is-small"
            on:click={() => Dialog.alert("Clicked!!!")}
            >Try to click me!</button>
        </Message>
      </svelte:fragment>
    </KwsPopover>
  </div>
  <div class="column">
    <p>
      A paragraph of text with a
      <KwsPopover
        class={klass}
        {style}
        {trigger}
        {placement}
        {interactive}
        {max_width}>
        <em style="text-decoration:underline;">popover trigger</em>
        <svelte:fragment slot="popover">
          <Message color="danger">
            Make <code>interactive: true</code> and you can click the button
            below
            <br /><br />
            <button
              class="button is-small"
              on:click={() => Dialog.alert("Clicked!!!")}
              >Try to click me!</button>
          </Message>
        </svelte:fragment>
      </KwsPopover>
      within it.
    </p>
  </div>
</div>

<div bind:this={notif}>
  <Notification>This is an <code>external_target</code></Notification>
</div>

<script>
  import {
    Popover as KwsPopover,
    Message,
    Dialog,
    Notification,
  } from "@kws3/ui";
  export let icon = "info-circle";
  export let icon_color = "grey";
  export let icon_size = "small";
  export let trigger = "click";
  export let placement = "auto";
  export let interactive = "false";
  export let max_width = "none";
  export let style = "";

  let klass = "";
  export { klass as class };

  let notif;
</script>
