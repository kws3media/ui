import{j as e,M as m}from"./version-b520517b.js";import{u as r}from"./index-45417e07.js";import{M as a,C as h,e as c,f as n}from"./index-bebc8d91.js";import{d as i}from"./index-356e4a49.js";import{S as l,M as d}from"./Timeline.stories-615b4857.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-55d2132c.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(o){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),`
`,e.jsx(t.h1,{id:"timeline",children:"Timeline"}),`
`,e.jsx(t.h2,{id:"a-timeline-component",children:"A Timeline component."}),`
`,e.jsxs(t.h3,{id:"this-component-acts-as-a-holder-for-the-timelineitem-and-timelineheader-components",children:["This component acts as a holder for the ",e.jsx("a",{href:"./?path=/docs/helpers-timeline-timelineitem--docs",children:"TimelineItem"})," and ",e.jsx("a",{href:"./?path=/docs/helpers-timeline-timelineheader--docs",children:"TimelineHeader"})," components."]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(h,{of:d}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(n,{code:i`import { Timeline } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Default values shown as example"})}),`
`,e.jsx(n,{code:i`
    @use '@kws3/ui/styles/Timeline.scss' with(
      $theme-colors: dv.$colors,
      $color: cv.getVar("text"),
      $color-invert: cv.getVar("text-invert"),
      $color-light: cv.getVar("text-weak"),
      $image-radius: cv.getVar("radius-small"),
      $image-shadow: cv.getVar("shadow"),
    );
  `})]})}function I(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{I as default};
