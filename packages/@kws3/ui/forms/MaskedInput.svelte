<!--
  @component
  

  @param {array} [mask=[]] - Input Mask format, Default: `[]`
  @param {boolean} [showMask=false] - Display the mask as a placeholder in place of the regular placeholder when the input element value is empty, Default: `false`
  @param {boolean} [guide=true] - When set to true (default), both placeholder characters and non-placeholder mask characters are shown, Default: `true`
  @param {boolean} [guideOnOutput=false] - Whether the output should contain guide characters, Default: `false`
  @param {boolean} [keepCharPositions=true] - When set to true (default), deleting a character leaves an empty space to allow overwriting, Default: `true`
  @param {string} [placeholder=""] - Placeholder text, Default: `""`
  @param {object} [inputElement=null] - Input Element, Default: `null`
  @param {object} [value=null] - Value of input, Default: `null`
  @param {string} [class=""] - Additional class for input, Default: `""`

-->
<div>
  <input
    class="input {klass}"
    type="text"
    {placeholder}
    bind:value
    bind:this={inputElement}
    on:keyup={updateMask} />
</div>

<script>
  import { onMount } from "svelte";
  import { createTextMaskInputElement, conformToMask } from "text-mask-core";
  /**
   * Input Mask format
   */
  export let mask = [],
    /**
     * Display the mask as a placeholder in place of the regular placeholder when the input element value is empty
     */
    showMask = false,
    /**
     * When set to true (default), both placeholder characters and non-placeholder mask characters are shown
     */
    guide = true,
    /**
     * Whether the output should contain guide characters
     */
    guideOnOutput = false,
    /**
     * When set to true (default), deleting a character leaves an empty space to allow overwriting
     */
    keepCharPositions = true,
    /**
     * Placeholder text
     */
    placeholder = "",
    /**
     * Input Element
     */
    inputElement = null,
    /**
     * Value of input
     */
    value = null;

  /**
   * Additional class for input
   */
  let klass = "";
  export { klass as class };

  onMount(() => {
    let textMaskConfig = {
      inputElement,
      mask,
      showMask,
      guide,
      keepCharPositions,
    };
    const textMaskInputElement = createTextMaskInputElement(textMaskConfig);
    textMaskInputElement.update(inputElement.value);
  });

  /*$: {
    if (value) {
      const result = conformToMask(value, mask, {
        guide: guideOnOutput,
      });
      value = result.conformedValue;
      textMaskInputElement.update(value);
    }
  }*/

  function updateMask() {
    if (value) {
      const result = conformToMask(value, mask, {
        guide: guideOnOutput,
      });
      value = result.conformedValue;

      let textMaskConfig = {
        inputElement,
        mask,
        showMask,
        guide,
        keepCharPositions,
      };
      const textMaskInputElement = createTextMaskInputElement(textMaskConfig);
      textMaskInputElement.update(value);
    }
  }
</script>
