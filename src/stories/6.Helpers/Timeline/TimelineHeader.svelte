<KwsTimelineHeader
  ><span class="tag is-danger is-medium">Only this is the component</span
  ></KwsTimelineHeader>
<KwsTimelineItem {color} {marker_image} {marker_icon} class={klass}>
  This part is from the TimelineItem Component
  <small slot="below">See full example page for more details</small>
</KwsTimelineItem>

<script>
  import {
    TimelineHeader as KwsTimelineHeader,
    TimelineItem as KwsTimelineItem,
  } from "@kws3/ui";
  /**
   * Color of marker and border
   * @type {import('@kws3/ui/types').ColorOptions}
   */
  export let color = "success",
    marker_image = "",
    marker_icon = "";

  let klass = "";
  export { klass as class };
</script>
