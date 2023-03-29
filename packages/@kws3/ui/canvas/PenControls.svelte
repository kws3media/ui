<!--
  @component


  @param {any} [EXPANDED_BUTTON=undefined] - EXPANDED_BUTTON property, Default: `undefined`
  @param {string} [canvas_controls_styles=""] - Inline CSS for the control, Default: `""`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [drawing_label=""] - Label for the canvas drawing box

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {array} [tools=[]] - List of tools available, Default: `[]`
  @param {array} [actions=[]] - List of actions toolbar, Default: `[]`
  @param {string} [active_tool="Pen"] - Determines which tool is select, Default: `"Pen"`
  @param {string} [default_color=""] - colorpicker's default color, Default: `""`
  @param {string} [control_position="center"] - ControlPosition property, Default: `"center"`
  @param {boolean} [can_undo=false] - CanUndo property, Default: `false`
  @param {boolean} [can_redo=false] - CanRedo property, Default: `false`
  @param {boolean} [show_tools=false] - ShowTools property, Default: `false`

  ### Events
  - `toggleExpand`
  - `setTool`
  - `undo`
  - `redo`
  - `reset`
  - `changeColor`

-->

<div class="pen-controls" style={canvas_controls_styles}>
  {#if !readonly && !disabled}
    <div
      class="columns m-0 is-flex is-justify-content-{control_position} is-flex-direction-row"
      style="gap: 0.5rem;">
      {#each actions as action}
        {#if action === "controls"}
          <div class="control">
            <div class="dropdown is-{show_tools ? 'active' : ''} is-up">
              <div class="dropdown-trigger">
                <button
                  type="button"
                  use:tooltip
                  class="button is-info is-small "
                  data-tooltip="Tools"
                  aria-controls="tools-dropdown"
                  on:click={() => (show_tools = !show_tools)}>
                  <Icon icon={toolMap[active_tool].icon} size="small" />
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
                      on:click|preventDefault={() => fire("setTool", { tool })}
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
              on:click={() => fire("undo")}
              disabled={!can_undo}>
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
              on:click={() => fire("redo")}
              disabled={!can_redo}>
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
              on:click={() => fire("reset")}>
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
              on:click={() => expandContract()}>
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
                fire("changeColor", { color });
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
  import { createEventDispatcher, onMount } from "svelte";

  const fire = createEventDispatcher();
  export let EXPANDED_BUTTON,
    /**
     * Inline CSS for the control
     */
    canvas_controls_styles = "",
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
    active_tool = "Pen",
    /**
     * colorpicker's default color
     */
    default_color = "",
    control_position = "center",
    can_undo = false,
    can_redo = false,
    show_tools = false;

  let expanded = false;
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

  onMount(() => {
    if (actions.includes("colorpicker") && default_color !== "") {
      console.log(default_color);
      color = default_color;
    }
  });

  function expandContract() {
    expanded = !expanded;
    if (EXPANDED_BUTTON) {
      EXPANDED_BUTTON._tippy.setContent(
        EXPANDED_BUTTON.getAttribute("data-tooltip")
      );
    }
    fire("toggleExpand");
  }
</script>
