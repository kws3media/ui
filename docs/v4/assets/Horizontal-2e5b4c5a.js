import{j as t}from"./jsx-runtime-f9e34c97.js";import{u as m}from"./index-e985353b.js";import{M as i,C as a,e as p,f as e}from"./index-2a9cb901.js";import{d as n}from"./index-356e4a49.js";import{M as c}from"./version-42e95f6f.js";import{S as h,M as d}from"./Horizontal.stories-d4b651c3.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-80400b1c.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(r){const o={em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",...m(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),`
`,t.jsx(o.h1,{id:"bar-chart",children:"Bar Chart"}),`
`,t.jsx(i,{of:h}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(e,{code:n`import { BarChart } from '@kws3/ui';`}),`
`,t.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(o.p,{children:t.jsx(o.em,{children:"Default values shown as example"})}),`
`,t.jsx(e,{code:n`
    @use '@kws3/ui/styles/Chart.scss' with (
      $background-color: cv.getVar("scheme-main"),
      $foreground-color: cv.getVar("text")
    );
    `})]})}function I(r={}){const{wrapper:o}={...m(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(s,{...r})}):s(r)}export{I as default};
