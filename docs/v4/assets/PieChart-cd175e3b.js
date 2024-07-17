import{j as t}from"./jsx-runtime-7ced2cd4.js";import{u as n}from"./index-1e098026.js";import{ae as a,af as m,ah as c,ai as e}from"./index-ea933ae1.js";import{d as r}from"./index-356e4a49.js";import{M as h}from"./version-31399cf6.js";import{S as p,M as d}from"./PieChart.stories-0e252e57.js";import"./iframe-54810192.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-fd6d98ed.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(s){const o={h1:"h1",h3:"h3",h4:"h4",...n(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{}),`
`,t.jsx(o.h1,{id:"pie-chart",children:"Pie Chart"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(m,{of:d}),`
`,t.jsx(c,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(e,{code:r`import { PieChart } from '@kws3/ui';`}),`
`,t.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(e,{code:r`@use '@kws3/ui/styles/Chart.scss';`}),`
`,t.jsx(o.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,t.jsx(e,{code:r`
      @use '@kws3/ui/styles/Chart.scss' with (
        $background-color: cv.getVar("scheme-main") !default;
        $foreground-color: cv.getVar("scheme-invert-ter") !default;
      );
    `})]})}function I(s={}){const{wrapper:o}={...n(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(i,{...s})}):i(s)}export{I as default};
