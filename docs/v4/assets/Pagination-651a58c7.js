import{j as t,M as a}from"./version-b520517b.js";import{u as s}from"./index-45417e07.js";import{M as m,C as c,e as d,f as i}from"./index-bebc8d91.js";import{d as r}from"./index-356e4a49.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as p,M as l}from"./Pagination.stories-997c2628.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-55d2132c.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(o.h1,{id:"pagination",children:"Pagination"}),`
`,t.jsx(o.h2,{id:"pagination-component-in-datagrid",children:"Pagination component in datagrid."}),`
`,t.jsx(c,{of:l}),`
`,t.jsx(d,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(i,{code:r`import { Pagination } from '@kws3/ui';`}),`
`,t.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(o.p,{children:t.jsx(o.em,{children:"Default values shown as example"})}),`
`,t.jsx(i,{code:r`
      @use '@kws3/ui/styles/Pagination.scss' with(
        $item-color: cv.getVar("text"),
        $item-background: cv.getVar("scheme-main"),
        $item-border: 1px solid cv.getVar("border"),
        $item-hover-color: $item-color,
        $item-hover-border: $item-border,
        $item-disabled-background: cv.getVar("pagination-disabled-background-color"),
        $item-disabled-color: cv.getVar("pagination-disabled-color"),
        $item-ellipsis-background: transparent,
        $item-ellipsis-border-color: transparent,
        $item-active-background: cv.getVar("success"),
        $item-active-color: cv.getVar("success-invert"),
      );
    `})]})}function I(e={}){const{wrapper:o}={...s(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}export{I as default};
