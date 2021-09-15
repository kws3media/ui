<KwsButton
  {text}
  {color}
  {icon}
  {done_icon}
  {done_text}
  {context}
  {size}
  {disabled}
  {icon_only}
  class={klass}
  {button_class}
  {cy}
  on:erase={onErase} />

<script>
  import { DeleteButton as KwsButton } from "@kws3/ui";

  export let text = "Delete",
    size = "",
    icon = "minus-circle",
    color = "danger",
    done_icon = "check",
    done_text = "Deleted",
    context = null,
    icon_only = false,
    disabled = false,
    button_class = "",
    cy = "";

  let klass = "";
  export { klass as class };

  function onErase(e, success = true) {
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
