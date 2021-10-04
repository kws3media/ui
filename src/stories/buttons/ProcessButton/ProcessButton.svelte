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
      {button_class}
      {cy}
      {icon_only}
      {disabled}
      class={klass}
      on:do={success} />
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
      {button_class}
      {cy}
      {icon_only}
      {disabled}
      class={klass}
      on:do={failed} />
    <p class="is-block mt-2">This will fail.</p>
  </div>
</div>

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

  function success(e) {
    let { doing, done } = e.detail;
    doing();
    setTimeout(() => {
      done();
    }, 2000);
  }

  function failed(e) {
    let { doing, error } = e.detail;
    doing();
    setTimeout(() => {
      error();
    }, 2000);
  }
</script>
