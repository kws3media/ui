<div class="columns">
  <div class="column has-text-centered">
    <KwsIcon
      {size}
      {color}
      icon="bookmark"
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
  export let size = "",
    color = "",
    style = "",
    inner_class = "",
    inner_style = "",
    family = "";

  let klass = "";
  export { klass as class };
</script>
