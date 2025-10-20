import{j as t}from"./jsx-runtime-15806eb5.js";import{u as a}from"./index-0b532f45.js";import{ae as i,af as m,ah as c,ai as r}from"./index-3f41c45d.js";import{d as n}from"./index-356e4a49.js";import{M as p}from"./version-fd7ab27b.js";import{S as h,M as d}from"./Panel.stories-2218286c.js";import"./iframe-d03f20d9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-ccd68622.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(o){const e={em:"em",h3:"h3",h4:"h4",h5:"h5",p:"p",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{}),`
`,t.jsx(i,{of:h}),`
`,t.jsx(m,{of:d}),`
`,t.jsx(c,{}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(r,{code:n`import { Panel } from '@kws3/ui';`}),`
`,t.jsx(e.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(e.p,{children:t.jsx(e.em,{children:"Default values shown as example"})}),`
`,t.jsx(r,{code:n`
    @use '@kws3/ui/styles/Panel.scss' with(
      $heading-background: cv.getVar("scheme-main-bis"),
      $background: cv.getVar("scheme-main"),
      $box-shadow: cv.getVar("shadow"),
      $color: cv.getVar("text"),
      $title-color: cv.getVar("text"),
      $title-weight: 700,
      $caret-open-color: cv.getVar("text"),
      $caret-closed-color: cv.getVar("link"),
    );
  `})]})}function I(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{I as default};
