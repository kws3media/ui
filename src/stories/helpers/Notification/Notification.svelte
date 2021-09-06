<KwsNotification {color} {style} {light} {dismissable} class={klass}
  >Your have 41 notifications</KwsNotification>

<script>
  import { Notification as KwsNotification } from "@kws3/ui";
  export let color = "info",
    style = "",
    light = false,
    dismissable = false;

  let klass = "";
  export { klass as class };
</script>
