<!--
  @component


  @param {string} [title=""] - Title of the panel, Default: `""`
  @param {string} [subtitle=""] - Subtitle of the panel, Default: `""`
  @param {string} [style=""] - Inline style for Panel, Default: `""`
  @param {string} [inner_style=""] - Inline style for Panel Content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [collapse_icon="caret-right"] - Collapse icon, Default: `"caret-right"`
  @param {boolean} [collapsible=false] - Collapsible property, Default: `false`
  @param {boolean} [collapsed=false] - Collapsed property, Default: `false`
  @param {boolean} [relative=false] - Relative property, Default: `false`
  @param {boolean} [has_toolbar=true] - Toolbar property, Default: `true`
  @param {boolean} [has_center=true] - Has Center property, Default: `true`

  ### Slots
  - `<slot name="center"  />`
  - `<slot name="toolbar"  />`
  - `<slot name="default"  />`

-->
<div class:collapsible class:collapsed class="panel" {style} data-cy={cy}>
  {#if title != ""}
    <div class="panel-heading" on:click={toggle}>
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <h2 class="subtitle">{@html title}</h2>
          </div>
        </div>
        <div class="level-item">
          {#if has_center}
            <slot name="center" />
          {/if}
        </div>
        <div class="level-right">
          {#if has_toolbar}
            <div class="level-item">
              <slot name="toolbar" />
            </div>
          {/if}
          <div class="level-item">
            <h2 class="subtitle is-6">{@html subtitle}</h2>
          </div>
          <span class="collapsor level-item">
            <Icon icon={collapse_icon} />
          </span>
        </div>
      </div>
    </div>
  {/if}
  <div class="panel-content-outer">
    <div
      class="panel-block is-clearfix"
      style="{inner_style} {relative ? 'position:relative' : ''}">
      <slot />
    </div>
  </div>
</div>

<script>
  import Icon from "./Icon.svelte";

  /**
   * Title of the panel
   * @type {string}
   */
  export let title = "";

  /**
   * Subtitle of the panel
   * @type {string}
   */
  export let subtitle = "";

  /**
   * Inline style for Panel
   * @type {string}
   */
  export let style = "";

  /**
   * Inline style for Panel Content
   * @type {string}
   */
  export let inner_style = "";

  /**
   * data-cy attribute for cypress
   * @type {string}
   */
  export let cy = "";

  /**
   * Collapse icon
   * @type {string}
   */
  export let collapse_icon = "caret-right";

  /**
   * Collapsible property
   * @type {boolean}
   */
  export let collapsible = false;

  /**
   * Collapsed property
   * @type {boolean}
   */
  export let collapsed = false;

  /**
   * Relative property
   * @type {boolean}
   */
  export let relative = false;

  /**
   * Toolbar property
   * @type {boolean}
   */
  export let has_toolbar = true;

  /**
   * Has Center property
   * @type {boolean}
   */
  export let has_center = true;

  function toggle() {
    if (collapsible) {
      collapsed = !collapsed;
    }
  }
</script>
