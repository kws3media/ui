import{j as t}from"./jsx-runtime-593b36f9.js";import{u as i}from"./index-a6b36cb5.js";import{M as m,C as a,e as p,f as r}from"./index-5adacd09.js";import{d as n}from"./index-356e4a49.js";import{M as c}from"./version-69ab0678.js";import{S as h,M as d}from"./MAM.stories-c8fdbc0b.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(e){const o={em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),`
`,t.jsx(o.h1,{id:"mixed-chart",children:"Mixed Chart"}),`
`,t.jsx(m,{of:h}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(r,{code:n`import { MixedChart } from '@kws3/ui';`}),`
`,t.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(o.p,{children:t.jsx(o.em,{children:"Default values shown as example"})}),`
`,t.jsx(r,{code:n`
    @use '@kws3/ui/styles/Chart.scss' with (
      $background-color: cv.getVar("scheme-main"),
      $foreground-color: cv.getVar("text")
    );
    `})]})}function _(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{_ as default};
