import{j as o}from"./jsx-runtime-074b9df2.js";import{u as i}from"./index-c2070526.js";import{ae as a,af as m,ah as c,ai as e}from"./index-710138f9.js";import{d as n}from"./index-356e4a49.js";import{M as p}from"./version-c40f204c.js";import{S as h,M as d}from"./Multiple.stories-9c917366.js";import"./iframe-6226d3e6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-d70f6a35.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(t){const r={em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{}),`
`,o.jsx(r.h1,{id:"radial-chart",children:"Radial Chart"}),`
`,o.jsx(a,{of:h}),`
`,o.jsx(m,{of:d}),`
`,o.jsx(c,{}),`
`,o.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(r.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(e,{code:n`import { RadialChart } from '@kws3/ui';`}),`
`,o.jsx(r.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(r.p,{children:o.jsx(r.em,{children:"Default values shown as example"})}),`
`,o.jsx(e,{code:n`
    @use '@kws3/ui/styles/Chart.scss' with (
      $background-color: cv.getVar("scheme-main"),
      $foreground-color: cv.getVar("text"),
      $axis-lines-color: cv.getVar("border"),
      $grid-lines-color: cv.getVar("border-weak")
    );
    `})]})}function y(t={}){const{wrapper:r}={...i(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(s,{...t})}):s(t)}export{y as default};
