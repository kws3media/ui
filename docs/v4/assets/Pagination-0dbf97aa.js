import{j as t}from"./jsx-runtime-01215b87.js";import{u as s}from"./index-4b5f231d.js";import{M as a,C as m,e as c,f as i}from"./index-95581144.js";import{d as r}from"./index-356e4a49.js";import{M as d}from"./version-ee24219f.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as p,M as l}from"./Pagination.stories-678c6bb2.js";import"./iframe-1fcd48d6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-9728098f.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o.h1,{id:"pagination",children:"Pagination"}),`
`,t.jsx(o.h2,{id:"pagination-component-in-datagrid",children:"Pagination component in datagrid."}),`
`,t.jsx(m,{of:l}),`
`,t.jsx(c,{}),`
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
    `})]})}function _(e={}){const{wrapper:o}={...s(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}export{_ as default};
