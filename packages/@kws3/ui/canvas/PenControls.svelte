<!--
  @component


  @param {any} [EXPANDED_BUTTON=undefined] - EXPANDED_BUTTON property, Default: `undefined`
  @param {string} [canvas_controls_styles=""] - Inline CSS for the control, Default: `""`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {object} [tools={}] - List of tools available, Default: `{}`
  @param {array} [actions=[]] - List of actions toolbar, Default: `[]`
  @param {string} [active_tool="Pen"] - Determines which tool is select, Default: `"Pen"`
  @param {'bottom'|'top'} [toolbar_placement="bottom"] - Determines where the action tools are placed, Default: `"bottom"`
  @param {string} [default_color=""] - colorpicker's default color, Default: `""`
  @param {string|'start'|'center'|'end'} [control_position="center"] - Default position of controls, Default: `"center"`
  @param {boolean} [can_undo=false] - Can_undo property, Default: `false`
  @param {boolean} [can_redo=false] - Can_redo property, Default: `false`
  @param {boolean} [show_tools=false] - Show_tools property, Default: `false`

  ### Events
  - `toggleExpand`

-->
<div
  class="kws-pen-controls is-placement-{toolbar_placement}"
  style={canvas_controls_styles}>
  {#if initialized && !readonly && !disabled}
    <div
      class="columns m-0 is-flex is-justify-content-{control_position}"
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
                  {#each Object.values(tools) as { name, icon }}
                    <a
                      href="/#"
                      class="dropdown-item"
                      on:click|preventDefault={() => {
                        active_tool = name;
                        fire("setTool", { tool: name });
                      }}
                      style="padding-right:1rem;">
                      <Icon {icon} size="small" />
                      <span>{name}</span>
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
  {/if}
</div>

<script>
  import { Icon, tooltip } from "@kws3/ui";
  import { createEventDispatcher, onMount } from "svelte";

  const fire = createEventDispatcher();
  export let EXPANDED_BUTTON;
  /**
   * Inline CSS for the control
   */
  export let canvas_controls_styles = "";
  /**
   * Determines whether canvas is disabled or not
   */
  export let disabled = false;
  /**
   * Determines whether canvas is readonly or not
   */
  export let readonly = false;
  /**
   * List of tools available
   */
  export let tools = {};
  /**
   * List of actions toolbar
   */
  export let actions = ["controls", "undo", "redo", "reset", "expand"];
  /**
   * Determines which tool is select
   */
  export let active_tool = "Pen";
  /**
   * Determines where the action tools are placed
   *  @type {'bottom'|'top'}
   */

  export let toolbar_placement = "bottom";
  /**
   * colorpicker's default color
   */
  export let default_color = "";
  /**
   * Default position of controls
   * @type {string|'start'|'center'|'end'}
   */
  export let control_position = "center";
  export let can_undo = false;
  export let can_redo = false;
  export let show_tools = false;

  let expanded = false;
  let color = "";
  let toolMap = {};
  let initialized = false;

  onMount(() => {
    if (actions.includes("colorpicker") && default_color !== "") {
      color = default_color;
    }
    setToolMap();
    initialized = true;
  });

  function setToolMap() {
    Object.values(tools).forEach((v) => {
      toolMap[v.name] = v;
    });

    console.log(toolMap);
  }

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
