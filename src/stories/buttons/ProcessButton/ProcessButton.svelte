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

  export let text = "Click Me",
    icon = "check",
    color = "primary",
    done_icon = "check",
    done_text = "Done",
    context = null,
    size = "",
    button_class = "",
    cy = "",
    icon_only = false,
    disabled = false;

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
