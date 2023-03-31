<div class="columns mb-6">
  <div class="column has-text-centered">
    <label for="" class="label">Please sign here</label>
    <KwsESignature {width} {height} {background_image} {readonly} {disabled} />
  </div>
</div>

<script>
  import { ESignature as KwsESignature } from "@kws3/ui";

  export let width = "520px",
    height = "170px",
    background_image = "",
    readonly = false,
    disabled = false;
</script>
