<KwsButton
  {text}
  {color}
  {icon}
  {doing_icon}
  {done_icon}
  {doing_text}
  {done_text}
  on:doing={onDoing} />

<script>
  import { ProcessButton as KwsButton } from "@kws3/ui";

  export let text = "Click Me",
    icon = "check",
    color = "primary",
    doing_icon = "hourglass",
    doing_text = "Doing...",
    done_icon = "check",
    done_text = "Done";

  function onDoing(e, success = true) {
    let { doing, done, error } = e.detail;
    doing();
    setTimeout(() => {
      if (success) {
        done();
      } else {
        error();
      }
    }, 2000);
  }
</script>
