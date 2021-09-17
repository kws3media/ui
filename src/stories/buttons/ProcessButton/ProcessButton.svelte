<KwsButton
  {text}
  {color}
  {icon}
  {done_icon}
  {done_text}
  {context}
  {size}
  {button_class}
  {cy}
  {icon_only}
  {disabled}
  class={klass}
  on:do={onDo} />

<script>
  import { ProcessButton as KwsButton } from "@kws3/ui";

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
    context = "_context_process";

  let klass = "";
  export { klass as class };

  function onDo(e, success = true) {
    let { doing, done, error } = e.detail;
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
