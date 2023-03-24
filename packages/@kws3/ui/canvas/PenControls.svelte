<!--
  @component

  @param {string} [canvasControlsStyles=""] - Inline CSS for the canvas control, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {array} [actions=[]] - Contains all the action item name, Default: `['controls', 'undo' , 'redo', 'reset', 'expand']`
  @param {bottom'|'top'} [toolbarPlacement="bottom"] - Position of the action toolbar, Default: `"bottom"`
  @param {array} [tools=[]] - List of tools available for user to select from, Default: `["Pen", "Eraser"]`
  @param {'Pen'|'Eraser'} [activeTool="Pen"] - Default active tool, Default: `"Pen"`

Only active when canvas is `readonly` or `disabled`, Default: `""`
-->

<div
  class="canvas-controls is-placement-{toolbarPlacement}"
  style={canvasControlsStyles}>
  {#if !readonly && !disabled}
    <div
      class="columns m-0 is-flex is-justify-content-{controlPosition} {controlClasses}"
      style="gap: 0.5rem;">
      {#each actions as action}
        {#if action === "controls"}
          <div class="control">
            <div class="dropdown is-{showTools ? 'active' : ''} is-up">
              <div class="dropdown-trigger">
                <button
                  type="button"
                  use:tooltip
                  class="button is-info is-small "
                  data-tooltip="Tools"
                  aria-controls="tools-dropdown"
                  on:click={() => (showTools = !showTools)}>
                  <Icon icon={toolMap[activeTool].icon} size="small" />
                </button>
              </div>

              <div
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
              </div>
            </div>
          </div>
        {:else if action === "undo"}
          <div class="control">
            <button
              use:tooltip
              type="button"
              class="button is-small is-warning "
              data-tooltip="Undo"
              on:click={() => PEN_INPUT && PEN_INPUT.undo()}
              disabled={!canUndo}>
              <Icon icon="undo" size="small" />
            </button>
          </div>
        {:else if action === "redo"}
          <div class="control">
            <button
              use:tooltip
              type="button"
              class="button is-small is-warning "
              data-tooltip="Redo"
              on:click={() => PEN_INPUT && PEN_INPUT.redo()}
              disabled={!canRedo}>
              <Icon icon="repeat" size="small" />
            </button>
          </div>
        {:else if action === "reset"}
          <div class="control">
            <button
              use:tooltip
              type="button"
              class="button is-small is-danger"
              data-tooltip="Reset"
              on:click={() => {
                PEN_INPUT && PEN_INPUT.reset();
                canUndo = false;
                canRedo = false;
              }}>
              <Icon icon="refresh" size="small" />
            </button>
          </div>
        {:else if action === "expand"}
          <div class="control">
            <button
              use:tooltip
              bind:this={EXPANDED_BUTTON}
              type="button"
              class="button is-small is-dark"
              data-tooltip={expanded ? "Contract" : "Expand"}
              on:click={expandContract}>
              <Icon icon={expanded ? "compress" : "expand"} size="small" />
            </button>
          </div>
        {:else if action === "colorpicker"}
          <div class="control">
            <input
              use:tooltip
              type="color"
              bind:value={color}
              class="button is-small"
              on:input={() => {
                fire("changeColor", { value: color });
              }}
              data-tooltip="Pick Color" />
          </div>
        {/if}
      {/each}
    </div>
  {:else if drawing_label}
    <p class="title is-5 has-text-centered">
      {drawing_label}
    </p>
  {/if}
</div>

<script>
  import { Icon, tooltip } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();
  export let PEN_INPUT,
    EXPANDED_BUTTON,
    /**
     * Inline CSS for the control
     */
    canvasControlsStyles = "",
    /**
     * Determines whether canvas is disabled or not
     */
    disabled = false,
    /**
     * Label for the canvas drawing box
     *
     * Only active when canvas is `readonly` or `disabled`
     */
    drawing_label = "",
    /**
     * Determines whether canvas is readonly or not
     */
    readonly = false,
    /**
     * List of tools available
     */
    tools = ["Pen", "Eraser"],
    /**
     * List of actions toolbar
     */
    actions = ["controls", "undo", "redo", "reset", "expand"],
    /**
     * Determines which tool is select
     */
    activeTool = "Pen",
    /**
     * Determines where the action tools are placed
     */
    toolbarPlacement = "bottom",
    controlPosition = "center",
    canUndo = false,
    canRedo = false,
    expanded = false,
    showTools = false;

  export let setTool = (tool) => {};
  export let expandContract = () => {};

  let color = "";

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
  let controlClasses = "is-flex-direction-row";
  $: {
    if (toolbarPlacement === "left" || toolbarPlacement === "right") {
      controlClasses = "is-flex-direction-column";
    }
  }
</script>
