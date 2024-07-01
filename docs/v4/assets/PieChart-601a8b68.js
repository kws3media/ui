import{j as t,M as a}from"./version-6f0519c4.js";import{u as i}from"./index-f60da153.js";import{M as m,C as c,e as h,f as e}from"./index-541e97f1.js";import{d as r}from"./index-356e4a49.js";import{S as p,M as d}from"./PieChart.stories-f437ee7c.js";import"./iframe-2486359f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-0ae793e3.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function n(s){const o={h1:"h1",h3:"h3",h4:"h4",...i(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsx(o.h1,{id:"pie-chart",children:"Pie Chart"}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(c,{of:d}),`
`,t.jsx(h,{}),`
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
    `})]})}function z(s={}){const{wrapper:o}={...i(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(n,{...s})}):n(s)}export{z as default};
