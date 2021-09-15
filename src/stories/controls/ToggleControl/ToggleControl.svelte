<div class="columns">
  <div class="column">
    <KwsToggleControl class={klass} {style} {cy}>
      <label for="some-primary-text" class="label">
        Primary Label
        <small class="is-block help">Some primary Text</small>
      </label>
      <ToggleButtons
        options={[
          { name: "Yes", value: 1 },
          { name: "No", value: 0 },
          { name: "Maybe", value: null },
        ]} />
    </KwsToggleControl>

    <hr />

    <KwsToggleControl class={klass} {style} {cy}>
      <label for="some-secondary-text" class="label">
        Secondary Label
        <small class="is-block help">Some secondary Text</small>
      </label>
      <Toggle
        on={true}
        on:change={handleChange}
        {disabled}
        {color}
        {size}
        {on_text}
        {off_text} />
    </KwsToggleControl>
  </div>
</div>

<script>
  import { ToggleControl as KwsToggleControl } from "@kws3/ui";
  import { Toggle } from "@kws3/ui";
  import { ToggleButtons } from "@kws3/ui";
  export let color = "primary",
    size = "normal",
    on_text = "",
    off_text = "",
    toggle = false,
    disabled = false,
    style = "",
    cy = "";

  let klass = "";
  export { klass as class };

  function handleChange() {
    toggle = !toggle;
  }
</script>
