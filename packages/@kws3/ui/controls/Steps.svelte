<ul class="steps {klass} is-{size}">
  {#each steps as step, idx}
    <li
      class="step-item is-{color} {active_index >= idx ? 'is-active' : ''}"
      on:click={() => navigateStep(idx)}
      style={clickable ? "cursor:pointer;" : ""}>
      <div class="step-marker">
        {#if icon_only}
          <Icon icon={step.step_icon ? step.step_icon : step_icon} />
        {:else if step.value}
          {step.value}
        {:else}
          {idx + 1}
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
     * Index used to determine which step needs to be `active`
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
    step_icon = "check";

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
