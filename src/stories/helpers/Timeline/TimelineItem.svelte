<KwsTimelineItem {color} {marker_image} {marker_icon} class={klass}>
  Something Great has happened.. yay!!!!
  <small slot="above">Heading</small>
  <small slot="below">Rejoice in merriment</small>
  <img
    slot="thumbnail"
    src="https://bulma.io/images/placeholders/64x64.png"
    alt="" />
</KwsTimelineItem>

<script>
  import { TimelineItem as KwsTimelineItem } from "@kws3/ui";
  export let color = "",
    marker_image = null,
    marker_icon = null;

  let klass = "";
  export { klass as class };
</script>
