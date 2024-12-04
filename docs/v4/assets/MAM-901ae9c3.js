import{j as o}from"./jsx-runtime-074b9df2.js";import{u as i}from"./index-c2070526.js";import{ae as m,af as a,ah as c,ai as e}from"./index-710138f9.js";import{d as n}from"./index-356e4a49.js";import{M as p}from"./version-c40f204c.js";import{S as h,M as d}from"./MAM.stories-02adba35.js";import"./iframe-6226d3e6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-d70f6a35.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(r){const t={em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{}),`
`,o.jsx(t.h1,{id:"mixed-chart",children:"Mixed Chart"}),`
`,o.jsx(m,{of:h}),`
`,o.jsx(a,{of:d}),`
`,o.jsx(c,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(e,{code:n`import { MixedChart } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(t.p,{children:o.jsx(t.em,{children:"Default values shown as example"})}),`
`,o.jsx(e,{code:n`
    @use '@kws3/ui/styles/Chart.scss' with (
      $background-color: cv.getVar("scheme-main"),
      $foreground-color: cv.getVar("text"),
      $axis-lines-color: cv.getVar("border"),
      $grid-lines-color: cv.getVar("border-weak")
    );
    `})]})}function I(r={}){const{wrapper:t}={...i(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(s,{...r})}):s(r)}export{I as default};
