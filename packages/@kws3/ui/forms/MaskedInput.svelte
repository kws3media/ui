<div>
  <input
    class="input {classes}"
    type="text"
    {placeholder}
    bind:value
    bind:this={inputElement}
    on:keyup={updateMask} />
</div>

<script>
  import { onMount } from "svelte";
  import { createTextMaskInputElement, conformToMask } from "text-mask-core";
  export let mask = [],
    showMask = false,
    guide = true,
    guideOnOutput = false,
    keepCharPositions = true,
    placeholder = "",
    classes = "",
    inputElement = null,
    value = null;

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
    console.log(value);
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
