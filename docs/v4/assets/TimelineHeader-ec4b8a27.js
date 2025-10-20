import{j as e}from"./jsx-runtime-15806eb5.js";import{u as s}from"./index-0b532f45.js";import{ae as m,af as a,ah as h,ai as r}from"./index-3f41c45d.js";import{d as n}from"./index-356e4a49.js";import{M as c}from"./version-fd7ab27b.js";import{S as p,M as d}from"./TimelineHeader.stories-252fd290.js";import"./iframe-d03f20d9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-ccd68622.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(o){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(t.h1,{id:"timelineheader",children:"TimelineHeader"}),`
`,e.jsx(t.h2,{id:"a-timelineheader-component",children:"A TimelineHeader component."}),`
`,e.jsx(m,{of:p}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(r,{code:n`import { TimelineHeader } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Default values shown as example"})}),`
`,e.jsx(r,{code:n`
    @use '@kws3/ui/styles/Timeline.scss' with(
      $theme-colors: dv.$colors,
      $color: cv.getVar("text"),
      $color-invert: cv.getVar("text-invert"),
      $color-light: cv.getVar("text-weak"),
      $image-radius: cv.getVar("radius-small"),
      $image-shadow: cv.getVar("shadow"),
    );
  `})]})}function y(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{y as default};
