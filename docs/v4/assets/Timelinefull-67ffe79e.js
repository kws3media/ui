var t=Object.freeze,c=Object.defineProperty;var n=(m,i)=>t(c(m,"raw",{value:t(i||m.slice())}));import{j as e}from"./jsx-runtime-44943e22.js";import{u as r}from"./index-374686ce.js";import{ae as d,af as p,ah as h,ai as o}from"./index-b94b5a14.js";import{d as l}from"./index-356e4a49.js";import{M as u}from"./version-0bcf7c36.js";import{S as g,M as T}from"./Timelinefull.stories-83e48f2f.js";import"./iframe-805611d7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-06312636.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var a;function s(m){const i={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...m.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),`
`,e.jsx(i.h1,{id:"timeline-full-example",children:"Timeline Full Example"}),`
`,e.jsx(i.h2,{id:"contains-combined-usage-of-timeline-timelineitem-and-timelineheader-components",children:"Contains combined usage of Timeline, TimelineItem and TimelineHeader components."}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(p,{of:T}),`
`,e.jsx(h,{}),`
`,e.jsx(i.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(o,{code:l(a||(a=n([`
  <Timeline {align}>
    <TimelineHeader
      ><span class="tag is-primary is-medium">2022</span></TimelineHeader>
    <TimelineItem color="success">The year started</TimelineItem>
    <TimelineItem color="success" marker_icon="thumbs-up">
      Something happened
      <small slot="below">and we rejoiced</small>
    </TimelineItem>
    <TimelineItem color="warning" marker_icon="thumbs-down">
      <small slot="above">a few days later...</small>
      Something else happened
      <small slot="below">and we didnt like it</small>
    </TimelineItem>
    <TimelineItem color="warning">
      Nothing happened
      <small slot="below"
        >but we filled <code>thumbnail</code> slot in
        <code>TimelineItem</code></small>
      <img
        slot="thumbnail"
        src="https://bulma.io/images/placeholders/64x64.png"
        alt="" />
    </TimelineItem>
    <TimelineHeader
      ><span class="tag is-info is-medium">2023</span></TimelineHeader>
    <TimelineItem color="success">The year 2023 started</TimelineItem>
    <TimelineItem
      color="danger"
      marker_image="https://bulma.io/images/placeholders/64x64.png">
      Nothing happened
      <small slot="below"
        >but we filled <code>marker_image</code> prop in
        <code>TimelineItem</code></small>
    </TimelineItem>
  </Timeline>
  <script>
    import { Timeline, TimelineItem, TimelineHeader } from '@kws3/ui';
  <\/script>
  `])))}),`
`,e.jsx(i.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(i.p,{children:e.jsx(i.em,{children:"Default values shown as example"})}),`
`,e.jsx(o,{code:l`
    @use '@kws3/ui/styles/Timeline.scss' with(
      $theme-colors: dv.$colors,
      $color: cv.getVar("text"),
      $color-invert: cv.getVar("text-invert"),
      $color-light: cv.getVar("text-weak"),
      $image-radius: cv.getVar("radius-small"),
      $image-shadow: cv.getVar("shadow"),
    );
  `})]})}function F(m={}){const{wrapper:i}={...r(),...m.components};return i?e.jsx(i,{...m,children:e.jsx(s,{...m})}):s(m)}export{F as default};
