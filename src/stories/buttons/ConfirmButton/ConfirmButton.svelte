<KwsButton
  {text}
  {color}
  {icon}
  {done_icon}
  {done_text}
  {context}
  {size}
  {cy}
  {icon_only}
  {button_class}
  {disabled}
  {should_confirm}
  class=""
  on:do={onDo} />

<script>
  import { ConfirmButton as KwsButton } from "@kws3/ui";

  export let button_class = "",
    text = "Click Me",
    size = "",
    icon = "check",
    color = "primary",
    cy = "",
    done_icon = "check",
    done_text = "Done",
    icon_only = false,
    disabled = false,
    should_confirm = true,
    context = "_context_confirm";

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
