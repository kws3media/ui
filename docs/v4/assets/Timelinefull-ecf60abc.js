var m=Object.freeze,c=Object.defineProperty;var o=(i,s)=>m(c(i,"raw",{value:m(s||i.slice())}));import{j as e,M as d}from"./version-1ca47c9b.js";import{D as p,M as u,C as h,d as g,e as n}from"./index-d73905c5.js";import{d as t}from"./index-356e4a49.js";import{S as T,M as x}from"./Timelinefull.stories-d439e2c5.js";import{u as r}from"./index-2f396c7f.js";import"./iframe-9a5b466a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-3e7fe717.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var a;function l(i){const s=Object.assign({h3:"h3",h5:"h5"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),`
`,e.jsx(p,{markdown:t`
# Timeline Full Example
## Contains combined usage of Timeline, TimelineItem and TimelineHeader components.
`}),`
`,e.jsx(u,{of:T}),`
`,e.jsx(h,{of:x}),`
`,e.jsx(g,{}),`
`,e.jsx(s.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n,{language:"javascript",code:t(a||(a=o([`
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
`,e.jsx(s.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,e.jsx(n,{language:"javascript",code:t`@import '@kws3/ui/styles/Timeline.scss';`}),`
`,e.jsx(s.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(n,{language:"css",code:t`
    $kws-theme-colors: $colors;
    $kws-timeline-default-color: $grey;
    $kws-timeline-default-color-invert: $light;
  `})]})}function N(i={}){const{wrapper:s}=Object.assign({},r(),i.components);return s?e.jsx(s,Object.assign({},i,{children:e.jsx(l,i)})):l(i)}export{N as default};
