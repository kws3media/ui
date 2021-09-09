<KwsButton
  {text}
  {color}
  {icon}
  {doing_icon}
  {done_icon}
  {doing_text}
  {done_text}
  {context}
  on:do={onDo} />

<script>
  import { ConfirmButton as KwsButton } from "@kws3/ui";

  export let text = "Click Me",
    icon = "check",
    color = "primary",
    doing_icon = "hourglass",
    doing_text = "Doing...",
    done_icon = "check",
    done_text = "Done",
    context = null;

  function onDo(e, success = true) {
    let { doing, done, error, context } = e.detail;
    console.log(context);
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
