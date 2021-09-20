<!--
  @component


  @param {array} [mask=[]] - Mask array

Each element in the array has to be either a string or a regular expression. Each string is a fixed character in the mask and each regular expression is a placeholder that accepts user input., Default: `[]`
  @param {string} [placeholder_char="_"] - This character represents the fillable spot in the mask, the guide character, Default: `"_"`
  @param {boolean} [guide=true] - Displays a guide when the user starts typing, Default: `true`
  @param {boolean} [guide_when_empty=false] - Displays a guide even before the user starts typing

Requires `guide` to be `true`, Default: `false`
  @param {boolean} [guide_on_output=false] - Whether the output should contain guide characters, Default: `false`
  @param {boolean} [keep_char_positions=false] - When set to `true`, deleting a character leaves an empty space to allow overwriting

Requires `guide` to be `true`, Default: `false`
  @param {string} [placeholder=""] - Placeholder text. Requires `guide_when_empty` to be `false` to be displayed., Default: `""`
  @param {string} [value=""] - Input value, Default: `""`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

  ### Events
  - `change` - Native input change event

-->
<!--Native input change event-->
<input
  class="input {klass}"
  type="text"
  {placeholder}
  on:change
  bind:value={_value}
  bind:this={inputElement} />

<script>
  import { onMount, tick } from "svelte";
  import {
    createTextMaskInputElement,
    conformToMask,
  } from "text-mask-core/src";
  /**
   * Mask array
   *
   * Each element in the array has to be either a string or a regular expression. Each string is a fixed character in the mask and each regular expression is a placeholder that accepts user input.
   */
  export let mask = [],
    /**
     * This character represents the fillable spot in the mask, the guide character
     */
    placeholder_char = "_",
    /**
     * Displays a guide when the user starts typing
     */
    guide = true,
    /**
     * Displays a guide even before the user starts typing
     *
     * Requires `guide` to be `true`
     */
    guide_when_empty = false,
    /**
     * Whether the output should contain guide characters
     */
    guide_on_output = false,
    /**
     * When set to `true`, deleting a character leaves an empty space to allow overwriting
     *
     * Requires `guide` to be `true`
     */
    keep_char_positions = false,
    /**
     * Placeholder text. Requires `guide_when_empty` to be `false` to be displayed.
     */
    placeholder = "",
    /**
     * Input value
     */
    value = "";

  let inputElement = null;

  /**
   * CSS classes for the input
   */
  let klass = "";
  export { klass as class };

  let textMaskConfig,
    textMaskInputElement,
    _value = "",
    _mounted = false;

  onMount(() => {
    textMaskConfig = {
      inputElement,
      mask,
      showMask: guide_when_empty,
      guide,
      keepCharPositions: keep_char_positions,
      placeholderChar: placeholder_char,
    };
    textMaskInputElement = createTextMaskInputElement(textMaskConfig);

    const inputHandler = ({ target: { value: v } }) => {
      textMaskInputElement.update(v);
    };

    const changeHandler = ({ target: { value: v } }) => {
      setOutgoingValue(v);
    };

    inputElement.addEventListener("input", inputHandler);
    inputElement.addEventListener("change", changeHandler);

    textMaskInputElement.update(inputElement.value);

    _mounted = true;

    handleIncomingValue();

    return () => {
      inputElement.removeEventListener("input", inputHandler);
      inputElement.removeEventListener("change", changeHandler);
    };
  });

  $: value, handleIncomingValue();

  function handleIncomingValue() {
    if (!_mounted) {
      return;
    }
    const result = conformToMask(value, mask, { guide: false });
    textMaskInputElement.update(result.conformedValue);

    _value = result.conformedValue;
  }

  function setOutgoingValue(v) {
    const result = conformToMask(v, mask, { guide: guide_on_output });
    value = result.conformedValue;
  }
</script>
