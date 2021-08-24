<!--
  @component


  @param {string} [title=""] - Title property, Default: `""`
  @param {string} [subtitle=""] - Subtitle property, Default: `""`
  @param {undefined} [pkg=undefined] - Pkg property, Default: `undefined`

  ### Slots
  - `<slot name="default"  />`

-->
<div>
  <div class="main">
    <div class="container">
      <div class="columns is-marginless layout-header-section">
        <div class="column">
          <h1 class="title is-2">{title}</h1>
          <p class="subtitle is-6">{subtitle}</p>
        </div>
        <div class="column is-narrow">
          <Package {pkg} />
        </div>
      </div>

      <div class="columns is-marginless layout-body-section">
        <div class="column">
          <slot />
        </div>
      </div>
    </div>
  </div>
</div>

<ConfirmButton />

<script>
  import Package from "../helpers/Package.svelte";
  import ConfirmButton from "../../../packages/@kws3/ui/buttons/components/ConfirmButton/ConfirmButton.svelte";

  export let title = "",
    subtitle = "",
    pkg = {
      name: "unknown",
      version: "0.0.0",
    };
</script>
