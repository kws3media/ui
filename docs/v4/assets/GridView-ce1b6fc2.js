import{j as o,M as i}from"./version-d179474b.js";import{u as a}from"./index-e8df77e3.js";import{M as s,C as d,e as l,f as t}from"./index-23db0581.js";import{d as c}from"./index-356e4a49.js";import{S as m,M as h}from"./GridView.stories-3f86f1b0.js";import"./iframe-c2c5aa08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-af010aa6.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const r={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{}),`
`,o.jsx(s,{of:m}),`
`,o.jsx(r.h1,{id:"gridview",children:"GridView"}),`
`,o.jsx(r.h2,{id:"gridview-component-in-datagrid",children:"GridView component in datagrid."}),`
`,o.jsx(d,{of:h}),`
`,o.jsx(l,{}),`
`,o.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(r.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(t,{code:c`use { GridView } from '@kws3/ui';`}),`
`,o.jsx(r.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(r.p,{children:o.jsx(r.em,{children:"Default values shown as example"})}),`
`,o.jsx(t,{code:c`
    @use '@kws3/ui/styles/Grid.scss' with (
      $box-shadow: cv.getVar("shadow"),
      $th-background: cv.getVar("table-background-color"),
      $th-color: cv.getVar("text"),
      $tag-margin: 0 0.125rem 0.125rem 0,
      $icon-size: 1.5em,
      $checked-row-background: cv.getVar("info-light"),
      $checked-row-color: cv.getVar("info"),
      $active-row-background: cv.getVar("table-row-active-background-color"),
      $active-row-color: cv.getVar("table-row-active-color"),
      $background: cv.getVar("table-background-color"),
      $striped-row-background: cv.getVar("table-striped-row-even-background-color"),
      $sticky-column-border-color: cv.getVar("border"),
      $sticky-column-active-row-border-color: cv.getVar("table-row-active-color"),
      $hover-background-color: cv.getVar("table-row-hover-background-color"),
      $even-row-hover-background-color: cv.getVar("table-striped-row-even-hover-background-color"),
      $cell-border-color: cv.getVar("table-cell-border-color"),
    );
    `})]})}function X(e={}){const{wrapper:r}={...a(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(n,{...e})}):n(e)}export{X as default};
