<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={push}
      >Create Snackbar</button>
  </div>
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={pushCB}
      >Create Snackbar With Custom Buttons</button>
  </div>
</div>

<script>
  import { Snackbars as KWSSnack } from "@kws3/ui";

  /**
   * Message in the snackbar
   */
  export let message = "",
    /**
     * Duration of the snackbar
     */
    duration = 3000,
    /**
     * Toast snackbar background color
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Position of the snackbar. `""` defaults to `bottom-right`. Can be modified globally in framework settings
     *
     * @type {''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'}
     */
    position = "bottom-right",
    /**
     * Light color variant for snackbar box and contents
     */
    light = false,
    /**
     * A persistent snackbar without duration, does not auto-dismiss after `duration` has elapsed
     */
    persistent = false,
    /**
     * A Custom value that can be passed in to the Snackbar, useful for identification purposes.
     */
    context = 1;

  /**
   * List of buttons to show in snackbar, can be an array of objects or array of strings
   *
   * If objects are used, the shape is:  `{text: <string>, color: <string>, click: <function>}`
   */
  export const buttons = ["Ok"];

  let count = 1;

  const push = () => {
    let { props, destroy } = KWSSnack.create({
      duration,
      color,
      position,
      persistent,
      context,
      light,
      message: count + " - " + message,
    });

    count++;
  };

  const pushCB = () => {
    let { props, destroy } = KWSSnack.create({
      duration,
      color,
      position,
      persistent,
      context,
      light,
      message: count + " - " + message,
      buttons: [
        { text: "Undo", color: "danger", click: () => alert("Undo clicked") },
        "Ok",
      ],
    });

    count++;
  };
</script>
