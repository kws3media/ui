import{j as o}from"./jsx-runtime-44943e22.js";import{u as i}from"./index-374686ce.js";import{ae as a,af as m,ah as c,ai as e}from"./index-b94b5a14.js";import{d as s}from"./index-356e4a49.js";import{M as h}from"./version-0bcf7c36.js";import{S as p,M as d}from"./MAM.stories-6a86f0ba.js";import"./iframe-805611d7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-06312636.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function n(r){const t={em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{}),`
`,o.jsx(t.h1,{id:"mixed-chart",children:"Mixed Chart"}),`
`,o.jsx(a,{of:p}),`
`,o.jsx(m,{of:d}),`
`,o.jsx(c,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(e,{code:s`import { MixedChart } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(t.p,{children:o.jsx(t.em,{children:"Default values shown as example"})}),`
`,o.jsx(e,{code:s`
    @use '@kws3/ui/styles/Chart.scss' with (
      $background-color: cv.getVar("scheme-main"),
      $foreground-color: cv.getVar("text"),
      $axis-lines-color: cv.getVar("border"),
      $grid-lines-color: cv.getVar("border-weak"),
      $tooltip-box-shadow: cv.getVar("shadow")
    );
    `})]})}function I(r={}){const{wrapper:t}={...i(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{I as default};
