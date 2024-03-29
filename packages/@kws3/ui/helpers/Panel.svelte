<!--
  @component


  @param {string} [title=""] - Title of the panel

Having content here will display the title bar, even if has_title is false, Default: `""`
  @param {string} [subtitle=""] - Subtitle of the panel

This will not display if there is no title area, Default: `""`
  @param {string} [style=""] - Inline CSS for Panel container, Default: `""`
  @param {string} [inner_class=""] - CSS classes for Panel content, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for Panel content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [collapse_icon="caret-right"] - Icon indicating whether Panel is collapsible

This will not display if there is no title area, Default: `"caret-right"`
  @param {boolean} [collapsible=false] - Determines whether panel is collapsible

This will not work if there is no title area, Default: `false`
  @param {boolean} [collapsed=false] - Determines whether Panel is currently collapsed or not, Default: `false`
  @param {boolean} [relative=false] - Indicates whether the Panel has `position: relative` or not

You might need this if there are absolutely positioned elements inside the Panel, Default: `false`
  @param {boolean} [has_toolbar=true] - Used to show or hide toolbar slot contents (slot=“toolbar”), Default: `true`
  @param {boolean} [has_center=true] - Used to show or hide center slot contents of the title area (slot=“center”), Default: `true`
  @param {boolean} [has_title=false] - Determines whether to show title bar when no title content is present, Default: `false`
  @param {string} [class=""] - CSS classes for Panel container, Default: `""`

  ### Slots
  - `<slot name="center"  />` - Used for center aligned title content

This will not work if there is no title area
  - `<slot name="toolbar"  />` - Used for right aligned toolbars

This will not work if there is no title area
  - `<slot name="default"  />` - Used for panel content

-->
<div
  class:collapsible
  class:collapsed
  class="panel {klass}"
  {style}
  data-cy={cy}>
  {#if title !== "" || has_title}
    <div class="panel-heading" on:click={toggle}>
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <h2 class="subtitle">{@html title}</h2>
          </div>
        </div>
        <div class="level-item">
          {#if has_center}
            <!--
            Used for center aligned title content

            This will not work if there is no title area
          --><slot
              name="center" />
          {/if}
        </div>
        <div class="level-right">
          {#if has_toolbar}
            <div class="level-item">
              <!--
              Used for right aligned toolbars

              This will not work if there is no title area
            --><slot
                name="toolbar" />
            </div>
          {/if}
          <div class="level-item">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
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
      style="{inner_style} {relative ? ';position:relative' : ''}">
      <!--Used for panel content--><slot />
    </div>
  </div>
</div>

<script>
  import { Icon } from "@kws3/ui";
  /**
   * Title of the panel
   *
   * Having content here will display the title bar, even if has_title is false
   * @type {string}
   */
  export let title = "",
    /**
     * Subtitle of the panel
     *
     * This will not display if there is no title area
     */
    subtitle = "",
    /**
     * Inline CSS for Panel container
     */
    style = "",
    /**
     * CSS classes for Panel content
     */
    inner_class = "",
    /**
     * Inline CSS for Panel content
     */
    inner_style = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Icon indicating whether Panel is collapsible
     *
     * This will not display if there is no title area
     */
    collapse_icon = "caret-right",
    /**
     * Determines whether panel is collapsible
     *
     * This will not work if there is no title area
     */
    collapsible = false,
    /**
     * Determines whether Panel is currently collapsed or not
     */
    collapsed = false,
    /**
     * Indicates whether the Panel has `position: relative` or not
     *
     * You might need this if there are absolutely positioned elements inside the Panel
     */
    relative = false,
    /**
     * Used to show or hide toolbar slot contents (slot=“toolbar”)
     */
    has_toolbar = true,
    /**
     * Used to show or hide center slot contents of the title area (slot=“center”)
     */
    has_center = true,
    /**
     * Determines whether to show title bar when no title content is present
     */
    has_title = false;

  /**
   * CSS classes for Panel container
   */
  let klass = "";
  export { klass as class };

  function toggle() {
    if (collapsible) {
      collapsed = !collapsed;
    }
  }
</script>
