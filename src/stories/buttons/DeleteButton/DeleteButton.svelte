<div class="columns">
  <div class="column">
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
      on:erase={success} />
    <p class="is-block mt-2">This will succeed.</p>
  </div>
  <div class="column">
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
      on:erase={failed} />
    <p class="is-block mt-2">This will fail.</p>
  </div>
</div>

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

  function success(e) {
    let { doing, done, context } = e.detail;
    doing();
    setTimeout(() => {
      done();
    }, 2000);
  }

  function failed(e) {
    let { doing, error, context } = e.detail;
    doing();
    setTimeout(() => {
      error();
    }, 2000);
  }
</script>
