<KwsNotification {color} {style} {light} {dismissable} {active} class={klass}
  >Your have 41 notifications</KwsNotification>

<script>
  //@ts-nocheck
  import { Notification as KwsNotification } from "@kws3/ui";
  export let color = "info",
    style = "",
    light = false,
    dismissable = false,
    active = true;

  let klass = "";
  export { klass as class };
</script>
