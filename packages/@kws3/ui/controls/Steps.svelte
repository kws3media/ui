<!--
  @component


  @param {array} [steps=[]] - Object, which contains name, description, custom value and custom icon of each steps, Default: `[]`
  @param {number} [active_index=0] - Index used to determine which step needs to be active, Default: `0`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the step, Default: `""`
  @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the step, Default: `""`
  @param {boolean} [clickable=false] - Determine, can able to navigate through steps, Default: `false`
  @param {boolean} [icon_only=false] - Show step icon given in `step_icon` property instead of numbers, Default: `false`
  @param {string} [step_icon="check"] - Icon used to displayed in steps, Default: `"check"`
  @param {boolean} [have_step_value=true] - Determine the step circle needs value.
If its `false`, it doesn't display number, icon or character, Default: `true`
  @param {boolean} [filled_step=false] - Determine the circle design is filled/hollow, Default: `false`
  @param {string} [class=""] - CSS classes for the steps container, Default: `""`

-->
<ul class="steps {klass} is-{size}">
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
   * Object, which contains name, description, custom value and custom icon of each steps
   * @any
   */
  export let steps = [],
    /**
     * Index used to determine which step needs to be active
     */
    active_index = 0,
    /**
     * Size of the step
     * @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Color of the step
     * @type {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Determine, can able to navigate through steps
     */
    clickable = false,
    /**
     * Show step icon given in `step_icon` property instead of numbers
     */
    icon_only = false,
    /**
     * Icon used to displayed in steps
     */
    step_icon = "check",
    /**
     * Determine the step circle needs value.
     * If its `false`, it doesn't display number, icon or character
     */
    have_step_value = true,
    /**
     * Determine the circle design is filled/hollow
     */
    filled_step = false;

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
