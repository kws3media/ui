<KwsNotification {color} {style} {light} {dismissable} {active} class={klass}
  >Your have 41 notifications</KwsNotification>

<script>
  import { Notification as KwsNotification } from "@kws3/ui";

  /**
   * Color of the Notification box
   * @type {ColorOptions}
   */
  export let color = "info",
    style = "",
    light = false,
    dismissable = false,
    active = true;

  let klass = "";
  export { klass as class };
</script>
