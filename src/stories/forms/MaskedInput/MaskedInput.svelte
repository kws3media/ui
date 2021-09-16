<div class="columns">
  <div class="column is-4">
    <label for="us-phone">US-Phone <small>(masked input)</small></label>
    <KwsMaskedInput
      mask={us_phpne_mask}
      {showMask}
      {guide}
      {guideOnOutput}
      {keepCharPositions}
      {inputElement}
      {placeholder}
      class={klass}
      bind:value={value1} />
    <p>Output : <code>{value1}</code></p>
  </div>
  <div class="column is-4">
    <label for="credit-card">Credit Card <small>(masked input)</small></label>
    <KwsMaskedInput
      mask={credit_card_mask}
      {showMask}
      {guide}
      {guideOnOutput}
      {keepCharPositions}
      {inputElement}
      {placeholder}
      class={klass}
      bind:value={value2} />
    <p>Output : <code>{value2}</code></p>
  </div>
  <div class="column is-4">
    <label for="date">Date <small>(masked input)</small></label>
    <KwsMaskedInput
      mask={date_mask}
      {showMask}
      {guide}
      {guideOnOutput}
      {keepCharPositions}
      {inputElement}
      {placeholder}
      class={klass}
      bind:value={value3} />
    <p>Output : <code>{value3}</code></p>
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
  let date_mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

  let value1 = "",
    value2 = "",
    value3 = "";

  export let showMask = false,
    guide = true,
    guideOnOutput = false,
    keepCharPositions = false,
    placeholder = "",
    inputElement = null;

  let klass = "";
  export { klass as class };
</script>
