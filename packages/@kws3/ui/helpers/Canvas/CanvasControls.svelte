<div class="canvas-controls" style="width:{width || '250px'};">
  {#if !readonly && !disabled}
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <div class="dropdown is-{showTools ? 'active' : ''} is-up">
          <div class="dropdown-trigger">
            <button
              use:tooltip
              class="button is-info is-small "
              data-tooltip="Tools"
              aria-controls="tools-dropdown"
              on:click={() => (showTools = !showTools)}>
              <Icon icon={toolMap[activeTool].icon} size="small" />
            </button>
          </div>

          <!-- <div
            class="dropdown-menu"
            id="tools-dropdown"
            role="menu"
            style="min-width:auto;">
            <div class="dropdown-content has-text-left">
              {#each tools as tool}
                <a
                  href="/#"
                  class="dropdown-item"
                  on:click|preventDefault={() => setTool(tool)}
                  style="padding-right:1rem;">
                  <Icon icon={toolMap[tool].icon} size="small" />
                  <span>{toolMap[tool].name}</span>
                </a>
              {/each}
            </div>
          </div> -->
        </div>
      </div>
    </div>
  {:else if drawing_label}
    <p class="title is-5 has-text-centered">
      {drawing_label}
    </p>
  {/if}
</div>

<script>
  import { Icon, tooltip } from "@kws3/ui";

  export let width, disabled, drawing_label, readonly, showTools, activeTool;

  let toolMap = {
    Pen: {
      name: "Pen",
      icon: "pencil",
    },
    Eraser: {
      name: "Eraser",
      icon: "eraser",
    },
  };

  let canUndo = false,
    canRedo = false,
    expanded = false,
    settingFlag = false;
</script>
