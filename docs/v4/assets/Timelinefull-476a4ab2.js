var n=Object.freeze,c=Object.defineProperty;var o=(i,m)=>n(c(i,"raw",{value:n(m||i.slice())}));import{j as e,M as d}from"./version-36e7533e.js";import{u as r}from"./index-106c01c9.js";import{D as p,M as u,C as h,e as T,f as t}from"./index-cb4e5ec9.js";import{d as s}from"./index-356e4a49.js";import{S as g,M as x}from"./Timelinefull.stories-77fc9ad1.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-19f46828.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var a;function l(i){const m={h3:"h3",h5:"h5",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),`
`,e.jsx(p,{markdown:s`
# Timeline Full Example
## Contains combined usage of Timeline, TimelineItem and TimelineHeader components.
`}),`
`,e.jsx(u,{of:g}),`
`,e.jsx(h,{of:x}),`
`,e.jsx(T,{}),`
`,e.jsx(m.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(t,{code:s(a||(a=o([`
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
`,e.jsx(m.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,e.jsx(t,{code:s`@import '@kws3/ui/styles/Timeline.scss';`}),`
`,e.jsx(m.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(t,{language:"css",code:s`
    $kws-theme-colors: $colors;
    $kws-timeline-default-color: $grey;
    $kws-timeline-default-color-invert: $light;
  `})]})}function F(i={}){const{wrapper:m}={...r(),...i.components};return m?e.jsx(m,{...i,children:e.jsx(l,{...i})}):l(i)}export{F as default};
