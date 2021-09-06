<!--
  @component


  @param {string} [title=""] - Title of the panel, Default: `""`
  @param {string} [subtitle=""] - Subtitle of the panel, Default: `""`
  @param {string} [outer_style=""] - Inline style for Panel, Default: `""`
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
<div
  class:collapsible
  class:collapsed
  class="panel {outer_class}"
  style={outer_style}
  data-cy={cy}>
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
            <!--Used for center aligned title content--><slot name="center" />
          {/if}
        </div>
        <div class="level-right">
          {#if has_toolbar}
            <div class="level-item">
              <!--Used for right aligned toolbars--><slot name="toolbar" />
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
      class="panel-block is-clearfix {inner_class}"
      style="{inner_style} {relative ? 'position:relative' : ''}">
      <!--Used for panel content--><slot />
    </div>
  </div>
</div>

<script>
  import { Icon } from "@kws3/ui";
  /**
   * Title of the panel
   * @type {string}
   */
  export let title = "",
    /**
     * Subtitle of the panel
     */
    subtitle = "",
    /**
     * Additional class for Panel container
     */
    outer_class = "",
    /**
     * Inline style for Panel container
     */
    outer_style = "",
    /**
     * Additional class for Panel content
     */
    inner_class = "",
    /**
     * Inline style for Panel Content
     */
    inner_style = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Collapse icon
     */
    collapse_icon = "caret-right",
    /**
     * Collapsible property
     */
    collapsible = false,
    /**
     * Collapsed property
     */
    collapsed = false,
    /**
     * Relative property
     */
    relative = false,
    /**
     * Toolbar property
     */
    has_toolbar = true,
    /**
     * Has Center property
     */
    has_center = true;

  function toggle() {
    if (collapsible) {
      collapsed = !collapsed;
    }
  }
</script>
