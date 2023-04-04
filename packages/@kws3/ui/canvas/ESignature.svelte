<!--
  @component


  @param {string} [image=""] - The Data created in the canvas by the user (readonly) (base64), Default: `""`
  @param {boolean} [is_touched=false] - (readonly) Determines whether canvas is touched or not, Default: `false`
  @param {string} [width="520px"] - Canvas width, Default: `"520px"`
  @param {string} [height="170px"] - Canvas height, Default: `"170px"`
  @param {string} [background_image=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string|'start'|'center'|'end'} [control_position="center"] - Default position of controls, Default: `"center"`

-->
<Canvas
  bind:image
  bind:is_touched
  {width}
  {height}
  {background_image}
  {readonly}
  {disabled}
  {control_position}
  activeTool="Pen"
  actions={["undo", "redo", "reset"]}
  has_controls={!readonly && !disabled}
  toolbar_placement={!readonly && !disabled ? "top" : ""} />

<script>
  import { Canvas } from "@kws3/ui";

  /**
   * The Data created in the canvas by the user (readonly) (base64)
   */
  export let image = "",
    /**
     *  (readonly) Determines whether canvas is touched or not
     */
    is_touched = false,
    /**
     * Canvas width
     */
    width = "520px",
    /**
     * Canvas height
     */
    height = "170px",
    /**
     * Background image for the canvas
     */
    background_image = "",
    /**
     * Determines whether canvas is readonly or not
     */
    readonly = false,
    /**
     * Determines whether canvas is disabled or not
     */
    disabled = false,
    /**
     * Default position of controls
     * @type {string|'start'|'center'|'end'}
     */
    control_position = "center";
</script>
