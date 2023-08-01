<!--
  @component


  @param {string} [image=""] - The Data created in the canvas by the user (readonly) (base64), Default: `""`
  @param {boolean} [is_touched=false] - (readonly) Determines whether canvas is touched or not, Default: `false`
  @param {string} [width="520px"] - Canvas width, Default: `"520px"`
  @param {string} [height="170px"] - Canvas height, Default: `"170px"`
  @param {string} [background_image=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [expand_from="center"] - The direction from which the canvas should expand.
'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `"center"`
  @param {string} [expand_to="center"] - The direction to which the canvas should expand.
'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `"center"`
  @param {number} [expand_scale=50] - Transform scale of the canvas on expansion
value in percentage %, Default: `50`
  @param {Extract<Positions, 'start'|'center'|'end'>} [control_position=center] - Default position of controls, Default: `center`
  @param {array} [actions=[]] - List of actions toolbar, Default: `[]`

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
  {tools}
  {expand_from}
  {expand_to}
  {expand_scale}
  active_tool="Pen"
  {actions}
  has_controls={!readonly && !disabled}
  toolbar_placement={!readonly && !disabled ? "top" : undefined} />

<script>
  import { Canvas, Pen } from "@kws3/ui";
  /**
   * @typedef {import('@kws3/ui/types').Positions} Positions
   */

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
     * The direction from which the canvas should expand.
     * 'top', 'bottom', 'left', 'right', 'center' and also 'n%'
     */
    expand_from = "center",
    /**
     * The direction to which the canvas should expand.
     * 'top', 'bottom', 'left', 'right', 'center' and also 'n%'
     */
    expand_to = "center",
    /**
     * Transform scale of the canvas on expansion
     * value in percentage %
     */
    expand_scale = 50,
    /**
     * Default position of controls
     * @type {Extract<Positions, 'start'|'center'|'end'>}
     */
    control_position = "center",
    /**
     * List of actions toolbar
     */
    actions = ["undo", "redo", "reset"];

  let tools = { Pen };
</script>
