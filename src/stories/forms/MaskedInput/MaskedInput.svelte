<KwsMaskedInput
  {mask}
  {showMask}
  {guide}
  {guideOnOutput}
  {keepCharPositions}
  {inputElement}
  {placeholder}
  {classes}
  bind:value />

<script>
  import { MaskedInput as KwsMaskedInput } from "@kws3/ui";
  export let mask = [
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
    ],
    showMask = false,
    guide = true,
    guideOnOutput = false,
    keepCharPositions = true,
    placeholder = "",
    classes = "",
    inputElement = null,
    value = null;
</script>
