<div class="p-4" style="width:500px;margin:0 auto;">
  <KwsTimeline {align}>
    <KwsTimelineHeader
      ><span class="tag is-primary is-medium">2022</span></KwsTimelineHeader>
    <KwsTimelineItem color="success">The year started</KwsTimelineItem>
    <KwsTimelineItem color="success" marker_icon="thumbs-up">
      Something happened
      <small slot="below">and we rejoiced</small>
    </KwsTimelineItem>
    <KwsTimelineItem color="warning" marker_icon="thumbs-down">
      <small slot="above">a few days later...</small>
      Something else happened
      <small slot="below">and we didnt like it</small>
    </KwsTimelineItem>
    <KwsTimelineItem color="warning">
      Nothing happened
      <small slot="below"
        >but we filled <code>thumbnail</code> slot in
        <code>TimelineItem</code></small>
      <img
        slot="thumbnail"
        src="https://bulma.io/assets/images/placeholders/64x64.png"
        alt="" />
    </KwsTimelineItem>
    <KwsTimelineHeader
      ><span class="tag is-info is-medium">2023</span></KwsTimelineHeader>
    <KwsTimelineItem color="success">The year 2023 started</KwsTimelineItem>
    <KwsTimelineItem
      color="danger"
      marker_image="https://bulma.io/assets/images/placeholders/64x64.png">
      Nothing happened
      <small slot="below"
        >but we filled <code>marker_image</code> prop in
        <code>TimelineItem</code></small>
    </KwsTimelineItem>
  </KwsTimeline>
</div>

<script>
  import {
    Timeline as KwsTimeline,
    TimelineHeader as KwsTimelineHeader,
    TimelineItem as KwsTimelineItem,
  } from "@kws3/ui";
  export let align = "";
</script>
