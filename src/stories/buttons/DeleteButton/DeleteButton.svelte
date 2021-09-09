<KwsButton
  {text}
  {color}
  {icon}
  {doing_icon}
  {done_icon}
  {doing_text}
  {done_text}
  {context}
  on:erase={onErase} />

<script>
  import { DeleteButton as KwsButton } from "@kws3/ui";

  export let text = "Delete",
    icon = "minus-circle",
    color = "danger",
    doing_icon = "hourglass",
    doing_text = "Deleting...",
    done_icon = "check",
    done_text = "Deleted",
    context = null;

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
