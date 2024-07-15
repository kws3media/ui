import{j as e}from"./jsx-runtime-2af955ec.js";import{u as r}from"./index-a6a89ff5.js";import{M as m,C as a,e as h,f as n}from"./index-d36baa79.js";import{d as i}from"./index-356e4a49.js";import{M as c}from"./version-d3dfd908.js";import{S as l,M as d}from"./Timeline.stories-b57386e3.js";import"./iframe-ea13b5b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-40bf6d39.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(o){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(t.h1,{id:"timeline",children:"Timeline"}),`
`,e.jsx(t.h2,{id:"a-timeline-component",children:"A Timeline component."}),`
`,e.jsxs(t.h3,{id:"this-component-acts-as-a-holder-for-the-timelineitem-and-timelineheader-components",children:["This component acts as a holder for the ",e.jsx("a",{href:"./?path=/docs/helpers-timeline-timelineitem--docs",children:"TimelineItem"})," and ",e.jsx("a",{href:"./?path=/docs/helpers-timeline-timelineheader--docs",children:"TimelineHeader"})," components."]}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(h,{}),`
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
  `})]})}function y(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{y as default};
