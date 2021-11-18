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
      {cy}
      {icon_only}
      {button_class}
      {disabled}
      {should_confirm}
      {completion_timeout}
      class=""
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
      {cy}
      {icon_only}
      {button_class}
      {disabled}
      {should_confirm}
      {completion_timeout}
      {error_timeout}
      class=""
      on:do={failed} />
    <p class="is-block mt-2">This will fail.</p>
  </div>
</div>

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
    context = "_context_confirm",
    completion_timeout = 600,
    error_timeout = 3000;

  function success(e) {
    let { doing, done, context } = e.detail;
    console.log(context);
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
