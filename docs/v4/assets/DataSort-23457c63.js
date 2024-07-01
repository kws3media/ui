import{j as t,M as i}from"./version-b520517b.js";import{u as a}from"./index-45417e07.js";import{M as m,C as c,e as d,f as e}from"./index-bebc8d91.js";import{d as n}from"./index-356e4a49.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as p,M as h}from"./DataSort.stories-61b3c5c6.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-55d2132c.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(o){const r={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(r.h1,{id:"datasort",children:"DataSort"}),`
`,t.jsx(r.h2,{id:"datasort-component-in-datagrid",children:"DataSort component in datagrid."}),`
`,t.jsx(c,{of:h}),`
`,t.jsx(d,{}),`
`,t.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(r.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(e,{code:n`import { DataSort } from '@kws3/ui';`}),`
`,t.jsx(r.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(r.p,{children:t.jsx(r.em,{children:"Default values shown as example"})}),`
`,t.jsx(e,{code:n`
    @use '@kws3/ui/styles/DataSort.scss' with (
      $border-radius: cv.getVar("radius-medium"),
      $background: cv.getVar("border"),
      $label-background: hsla(
        cv.getVar("scheme-h"),
        cv.getVar("scheme-s"),
        90%,
        1
      ),
      $dropdown-text-color: cv.getVar("primary"),
      $dropdown-marker-color: cv.getVar("primary"),
    );
    `})]})}function I(o={}){const{wrapper:r}={...a(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(s,{...o})}):s(o)}export{I as default};
