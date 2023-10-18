<div class="columns">
  <div class="column has-text-centered">
    <KwsIcon
      {size}
      {color}
      {icon}
      {style}
      {inner_class}
      {inner_style}
      class={klass}
      {family} />

    <KwsIcon
      {size}
      {color}
      icon="folder"
      {style}
      {inner_class}
      {inner_style}
      class={klass}
      {family} />

    <KwsIcon
      {size}
      {color}
      icon="image"
      {style}
      {inner_class}
      {inner_style}
      class={klass}
      {family} />

    <KwsIcon
      {size}
      {color}
      icon={family === "material" ? "favorite" : "heart"}
      {style}
      {inner_class}
      {inner_style}
      class={klass}
      {family} />

    <KwsIcon
      {size}
      {color}
      icon={family === "material" ? "account_circle" : "user"}
      {style}
      {inner_class}
      {inner_style}
      class={klass}
      {family} />
  </div>
</div>

<script>
  import { Icon as KwsIcon } from "@kws3/ui";

  /**
   * Size of the Icon
   *  @type {import('@kws3/ui/types').SizeOptions}
   */
  export let size = "",
    /**
     * Color of the Icon
     * @type {import('@kws3/ui/types').ColorOptions}
     */
    color = "",
    style = "",
    icon = "",
    inner_class = "",
    inner_style = "",
    /**
     * Font family to use for Icon
     * @type {import('@kws3/ui/types').FontFamilies}
     */
    family = "";

  let klass = "";
  export { klass as class };
</script>
