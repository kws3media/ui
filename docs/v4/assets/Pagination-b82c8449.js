import{j as t}from"./jsx-runtime-f80f9341.js";import{u as a}from"./index-e7737f15.js";import{ae as s,af as m,ah as c,ai as i}from"./index-0d96c106.js";import{d as r}from"./index-356e4a49.js";import{M as d}from"./version-6fdd0533.js";import"./chunk-454WOBUV-9b3ada54.js";import{S as p,M as h}from"./Pagination.stories-ae2c7ad8.js";import"./iframe-508739bf.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-ae6f3512.js";import"./RadialChart-72e896af.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
`,t.jsx(s,{of:p}),`
`,t.jsx(o.h1,{id:"pagination",children:"Pagination"}),`
`,t.jsx(o.h2,{id:"pagination-component-in-datagrid",children:"Pagination component in datagrid."}),`
`,t.jsx(m,{of:h}),`
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
    `})]})}function _(e={}){const{wrapper:o}={...a(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}export{_ as default};
