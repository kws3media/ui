<div class="columns mb-6">
  <div class="column has-text-centered">
    <label for="" class="label">Please sign here</label>
    <KwsESignature
      {width}
      {height}
      {background_image}
      {readonly}
      {disabled}
      {control_position} 
      {expand_from}
      {expand_to}
      {actions}
      {expand_scale}
      />
  </div>
</div>

<script>
  import { ESignature as KwsESignature } from "@kws3/ui";

  export let width = "520px",
    height = "170px",
    background_image = "",
    readonly = false,
    /**
     * Default position of controls
     * @type {Extract<import('@kws3/ui/types').Positions, 'start'|'center'|'end'>}
     */
    control_position = "center",
    disabled = false,
    expand_from = "center",
    expand_to = "center",
    expand_scale = 50,
    actions = [
    "undo",
    "redo",
    "reset",
    "expand",
    ]; 
</script>
