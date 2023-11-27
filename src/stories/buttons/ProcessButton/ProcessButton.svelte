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
      {completion_timeout}
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
      {completion_timeout}
      {error_timeout}
      on:do={failed} />
    <p class="is-block mt-2">This will fail.</p>
  </div>
</div>

<script>
  import { ProcessButton as KwsButton } from "@kws3/ui";

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   * @typedef {import('@kws3/ui/types').ButtonEvent} ButtonEvent
   */

  export let button_class = "",
    text = "Click Me",
    /**
     * Size of the Button
     * @type {SizeOptions}
     */
    size = "",
    icon = "check",
    /**
     * Color of the Button
     * @type {ColorOptions}
     */
    color = "primary",
    cy = "",
    done_icon = "check",
    done_text = "Done",
    icon_only = false,
    disabled = false,
    context = "_context_process",
    completion_timeout = 600,
    error_timeout = 3000;

  let klass = "";
  export { klass as class };

  function success(e) {
    /**
     * @type {ButtonEvent}
     */
    let { doing, done } = e.detail;
    doing();
    setTimeout(() => {
      done();
    }, 2000);
  }

  function failed(e) {
    /**
     * @type {ButtonEvent}
     */
    let { doing, error } = e.detail;
    doing();
    setTimeout(() => {
      error();
    }, 2000);
  }
</script>
