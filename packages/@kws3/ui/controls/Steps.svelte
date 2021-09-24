<!--
  @component


  @param {array} [steps=[]] - Array of steps, which contains the `value`, `name`, `description` and `step_icon` property for each step

Steps are automatically “numbered” by default,
unless overridden by what is in the `value` property inside the steps array, Default: `[]`
  @param {number} [active_index=0] - Index used to determine which step is active, Default: `0`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the steps, Default: `""`
  @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the active steps, Default: `""`
  @param {boolean} [clickable=false] - Determines If the steps are navigable by clicking on the steps themselves, Default: `false`
  @param {boolean} [icon_only=false] - If `true`, then the steps will display the icon from the default `step_icon` property, or the `step_icon` value from within the `steps` array; instead of numbers, or `value` in the `steps` array, Default: `false`
  @param {string} [step_icon="check"] - The default icon used in all steps when `icon_only` is `true` unless overridden by another `step_icon` property within the steps array, Default: `"check"`
  @param {boolean} [have_step_value=true] - When `false`, the step circle will not display numbers or `value` or `step_icon`, and be empty instead, Default: `true`
  @param {boolean} [filled_step=false] - Determines if active steps appearance is filled(inverted) or not, Default: `false`
  @param {string} [style=""] - Inline CSS for the Steps container, Default: `""`
  @param {string} [class=""] - CSS classes for the steps container, Default: `""`

-->
<ul class="steps {klass} is-{size}" {style}>
  {#each steps as step, idx}
    <li
      class="step-item is-{color} {active_index >= idx && !filled_step
        ? 'is-active'
        : ''} {active_index >= idx && filled_step ? 'is-completed' : ''}"
      on:click={() => navigateStep(idx)}
      style={clickable ? "cursor:pointer;" : ""}>
      <div class="step-marker">
        {#if have_step_value}
          {#if icon_only}
            <Icon icon={step.step_icon ? step.step_icon : step_icon} />
          {:else if step.value}
            {step.value}
          {:else}
            {idx + 1}
          {/if}
        {/if}
      </div>
      {#if step.name || step.description}
        <div class="step-details">
          <p class="step-title">{step.name}</p>
          {#if step.description}
            <p>{step.description}</p>
          {/if}
        </div>
      {/if}
    </li>
  {/each}
</ul>

<script>
  import { Icon } from "@kws3/ui";
  /**
   * Array of steps, which contains the `value`, `name`, `description` and `step_icon` property for each step
   *
   * Steps are automatically “numbered” by default,
unless overridden by what is in the `value` property inside the steps array
   * @any
   */
  export let steps = [],
    /**
     * Index used to determine which step is active
     */
    active_index = 0,
    /**
     * Size of the steps
     * @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Colour of the active steps
     * @type {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Determines If the steps are navigable by clicking on the steps themselves
     */
    clickable = false,
    /**
     * If `true`, then the steps will display the icon from the default `step_icon` property, or the `step_icon` value from within the `steps` array; instead of numbers, or `value` in the `steps` array
     */
    icon_only = false,
    /**
     * The default icon used in all steps when `icon_only` is `true` unless overridden by another `step_icon` property within the steps array
     */
    step_icon = "check",
    /**
     * When `false`, the step circle will not display numbers or `value` or `step_icon`, and be empty instead
     */
    have_step_value = true,
    /**
     * Determines if active steps appearance is filled(inverted) or not
     */
    filled_step = false,
    /**
     * Inline CSS for the Steps container
     */
    style = "";

  /**
   * CSS classes for the steps container
   */
  let klass = "";
  export { klass as class };

  function navigateStep(index) {
    if (!clickable) return;
    active_index = index;
  }
</script>
