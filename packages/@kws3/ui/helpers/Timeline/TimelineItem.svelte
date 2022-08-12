<!--
  @component


  @param {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="primary"] - Color of marker and border, Default: `"primary"`
  @param {string} [marker_icon="null"] - Any icon name accepted by the Icon component, icon will be placed inside the marker, Default: `"null"`
  @param {string} [marker_image="null"] - Any image URL, the image will be placed inside the marker, Default: `"null"`
  @param {string} [class=""] - CSS classes for the TimelineItem container, Default: `""`

  ### Slots
  - `<slot name="above"  />` - Optional text to be displayed above the main text
  - `<slot name="default"  />` - Default slot containing the main text
  - `<slot name="below"  />` - Optional text to be displayed below the main text
  - `<slot name="thumbnail"  />` - Optional thumbnail image do be displayed next to the main content

-->
<li class="kws-timeline-item is-{color} {klass}">
  <div class="kws-timeline-marker">
    {#if marker_icon && !marker_image}
      <Icon icon={marker_icon} />
    {/if}{#if marker_image && !marker_icon}
      <figure class="image is-32x32"><img src={marker_image} alt="" /></figure>
    {/if}
  </div>
  <div class="kws-timeline-content">
    <span class="is-block has-text-grey"
      ><!--Optional text to be displayed above the main text--><slot
        name="above" /></span>
    <span class="is-block description">
      <!--Default slot containing the main text--><slot />
    </span>

    <span class="is-block has-text-grey">
      <!--Optional text to be displayed below the main text--><slot
        name="below" />
    </span>
  </div>
  {#if $$slots.thumbnail}
    <div class="kws-timeline-image">
      <!--Optional thumbnail image do be displayed next to the main content--><slot
        name="thumbnail" />
    </div>
  {/if}
</li>

<script>
  //@ts-nocheck
  import { Icon } from "@kws3/ui";

  /**
   * Color of marker and border
   * @type {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'}
   */
  export let color = "primary";
  /**
   * Any icon name accepted by the Icon component, icon will be placed inside the marker
   * @type {string}
   */
  export let marker_icon = null;
  /**
   * Any image URL, the image will be placed inside the marker
   * @type {string}
   */
  export let marker_image = null;

  /**
   * CSS classes for the TimelineItem container
   */
  let klass = "";
  export { klass as class };
</script>
