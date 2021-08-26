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
  import Icon from "../Icon.svelte";

  export let title = "",
    subtitle = "",
    style = "",
    inner_style = "",
    cy = "",
    collapse_icon = "caret-right",
    collapsible = false,
    collapsed = false,
    relative = false,
    has_toolbar = true,
    has_center = true;

  function toggle() {
    if (collapsible) {
      collapsed = !collapsed;
    }
  }
</script>
