import{j as t}from"./jsx-runtime-3fcd980c.js";import{u as i}from"./index-8b4f4e69.js";import{M as m,C as a,e as c,f as r}from"./index-13487d6d.js";import{d as n}from"./index-356e4a49.js";import{M as p}from"./version-b4edb0a0.js";import{S as h,M as d}from"./Panel.stories-8a7e5218.js";import"./iframe-b8547dc1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-26b60ffd.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(o){const e={em:"em",h3:"h3",h4:"h4",h5:"h5",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{}),`
`,t.jsx(m,{of:h}),`
`,t.jsx(a,{of:d}),`
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
  `})]})}function I(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{I as default};
