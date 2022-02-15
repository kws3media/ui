<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={push}
      >Create Toast</button>
  </div>
</div>

<script>
  import { Toasts as KWSToast } from "@kws3/ui";

  /**
   * Message in the toast
   */
  export let message = "",
    /**
     * Duration of the toast
     */
    duration = 3000,
    /**
     * Toast toast background color
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Position of the toast. `""` defaults to `bottom`. Can be modified globally in framework settings
     *
     * @type {''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'}
     */
    position = "bottom",
    /**
     * Light color variant for toast box and contents
     */
    light = false,
    /**
     * A Custom value that can be passed in to the Toast, useful for identification purposes.
     */
    context = 1;

  let count = 1;

  const push = () => {
    // eslint-disable-next-line no-unused-vars
    let { props, destroy } = KWSToast.create({
      duration,
      color,
      position,
      context,
      light,
      message: count + " - " + message,
    });

    count++;
  };
</script>
