<div class="columns">
  <div class="column">
    <KwsPopover
      on:opening={({ detail }) => {
        console.log("opening", detail);
      }}
      on:open={({ detail }) => {
        x.focus();
        console.log("open", detail);
      }}
      on:closing={({ detail }) => {
        console.log("closing", detail);
      }}
      on:close={({ detail }) => {
        console.log("close", detail);
      }}
      on:trigger={({ detail }) => {
        console.log("trigger", detail);
      }}
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
            type="button"
            bind:this={x}
            class="button is-small"
            on:click={() =>
              // @ts-ignore
              Dialog.alert("Clicked!!!")}>Try to click me!</button>
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
            type="button"
            class="button is-small"
            on:click={() =>
              // @ts-ignore
              Dialog.alert("Clicked!!!")}>Try to click me!</button>
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
              type="button"
              class="button is-small"
              on:click={() =>
                // @ts-ignore
                Dialog.alert("Clicked!!!")}>Try to click me!</button>
          </Message>
        </svelte:fragment>
      </KwsPopover>
      within it.
    </p>
  </div>
</div>

<div class="columns is-centered">
  <div class="column is-narrow">
    <Message color="light">
      <KwsPopover
        bind:this={manual_popover}
        class={klass}
        {icon}
        {icon_color}
        {icon_size}
        {style}
        trigger="manual"
        hide_on_click={false}
        {placement}
        {interactive}
        {max_width}>
        <svelte:fragment slot="popover">
          <Message>
            Make <code>interactive: true</code> and you can click the button
            below
            <br /><br />
            <button
              type="button"
              class="button is-small"
              on:click={() =>
                // @ts-ignore
                Dialog.alert("Clicked!!!")}>Try to click me!</button>
          </Message>
        </svelte:fragment>
      </KwsPopover> This popover can only be opened and closed programmatically using
      the buttons below.
      <hr class="is-small" />
      <div class="is-block">
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button
              type="button"
              class="button is-small"
              on:click={() => {
                manual_popover.open();
              }}>
              Open
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button is-small"
              on:click={() => {
                manual_popover.close();
              }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Message>
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
  /**
   * Colour of the trigger icon displayed when default slot has no content
   * @type {import('@kws3/ui/types').ColorOptions | 'grey'}
   */
  export let icon_color = "grey";
  /**
   * Size of the trigger icon displayed when default slot has no content
   * @type {import('@kws3/ui/types').SizeOptions}
   */
  export let icon_size = "small";
  export let trigger = "click";
  /**
   * Placement of the tooltips
   * @type {import('@kws3/ui/types').TippyPositions}
   */
  export let placement = "auto";
  export let interactive = false;
  export let max_width = "none";
  export let style = "";

  let klass = "";
  export { klass as class };

  let manual_popover;
  let x;

  let notif;
</script>
