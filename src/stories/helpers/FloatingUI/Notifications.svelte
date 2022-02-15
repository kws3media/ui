<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={push}
      >Create Notification</button>
  </div>
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={pushCustom}
      >Custom Component Notification</button>
  </div>
</div>

<script>
  import { Notifications as KWSNotif } from "@kws3/ui";
  import CustomNotification from "./CustomNotification.svelte";

  /**
   * Title/Heading of the notification
   */
  export let title = "",
    /**
     * Message in the notification
     *
     * Renders as HTML, so can use `<br>` tags for line breaks
     */
    message = "",
    /**
     * Duration of the notification
     */
    duration = 3000,
    /**
     * Toast notification background color
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Position of the notification. `""` defaults to `top-right`. Can be modified globally in framework settings
     *
     * @type {''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'}
     */
    position = "top-right",
    /**
     * Light color variant for notification box and contents
     */
    light = false,
    /**
     * Determines if notification is dismissable by user
     */
    dismissable = true,
    /**
     * A persistent notification without duration, does not auto-dismiss after `duration` has elapsed
     */
    persistent = false,
    /**
     * A Custom value that can be passed in to the Notification, useful for identification purposes.
     */
    context = 1;

  /**
   * This allows you to pass in a whole component, to be shown in the notification area
   */
  export const component = null;

  let count = 1;

  const push = () => {
    // eslint-disable-next-line no-unused-vars
    let { props, destroy } = KWSNotif.create({
      title,
      duration,
      color,
      position,
      dismissable,
      persistent,
      context,
      light,
      message: count + " - " + message,
    });

    count++;
  };

  const pushCustom = () => {
    // eslint-disable-next-line no-unused-vars
    let { props, destroy } = KWSNotif.create({
      component: CustomNotification,
      title,
      message: "I am a customized Notification...",
      persistent: true,
      dismissable: false,
      position,
      color,
      light,
      // eslint-disable-next-line no-unused-vars
      beforeClose: (props) => {
        //do something here before close
        console.log("before close");
      },
      // eslint-disable-next-line no-unused-vars
      afterClose: (props) => {
        //do something here after close
        console.log("after close");
      },
    });

    setTimeout(() => {
      destroy();
    }, 5000);
  };
</script>
