<div class="columns">
  <div class="column is-4">
    <label for="us-phone">US-Phone <small>(masked input)</small></label>
    <KwsMaskedInput
      mask={us_phpne_mask}
      {guide_when_empty}
      {guide}
      {guide_on_output}
      {keep_char_positions}
      {placeholder}
      on:change
      class={klass}
      bind:value={value1} />
    <p>Output : <code>{value1}</code></p>
    <label for="us-phone">US-Phone <small>(normal input)</small></label>
    <input type="text" class="input is-small" bind:value={value1} />
  </div>
  <div class="column is-4">
    <label for="credit-card">Credit Card <small>(masked input)</small></label>
    <KwsMaskedInput
      mask={credit_card_mask}
      {guide_when_empty}
      {guide}
      {guide_on_output}
      {keep_char_positions}
      {placeholder}
      on:change
      class={klass}
      bind:value={value2} />
    <p>Output : <code>{value2}</code></p>
    <label for="credit-card">Credit Card <small>(normal input)</small></label>
    <input type="text" class="input is-small" bind:value={value2} />
  </div>
  <div class="column is-4">
    <label for="date">Date <small>(masked input)</small></label>
    <KwsMaskedInput
      mask={date_mask}
      {guide_when_empty}
      {guide}
      {guide_on_output}
      {keep_char_positions}
      {placeholder}
      on:change
      class={klass}
      bind:value={value3} />
    <p>Output : <code>{value3}</code></p>
    <label for="date">Date <small>(normal input)</small></label>
    <input type="text" class="input is-small" bind:value={value3} />
  </div>
</div>

<script>
  import { MaskedInput as KwsMaskedInput } from "@kws3/ui";
  let us_phpne_mask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  let credit_card_mask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  let date_mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /[1-2]/, /\d/, /\d/, /\d/];

  let value1 = "",
    value2 = "",
    value3 = "";

  export let guide_when_empty = false,
    guide = true,
    guide_on_output = false,
    keep_char_positions = false,
    placeholder = "";

  let klass = "";
  export { klass as class };
</script>
