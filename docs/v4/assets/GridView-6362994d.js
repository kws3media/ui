import{j as o}from"./jsx-runtime-2af955ec.js";import{u as i}from"./index-a6a89ff5.js";import{M as a,C as s,e as d,f as t}from"./index-d36baa79.js";import{d as c}from"./index-356e4a49.js";import{M as l}from"./version-d3dfd908.js";import{S as m,M as h}from"./GridView.stories-5842d8ce.js";import"./iframe-ea13b5b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-40bf6d39.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const r={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{}),`
`,o.jsx(a,{of:m}),`
`,o.jsx(r.h1,{id:"gridview",children:"GridView"}),`
`,o.jsx(r.h2,{id:"gridview-component-in-datagrid",children:"GridView component in datagrid."}),`
`,o.jsx(s,{of:h}),`
`,o.jsx(d,{}),`
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
      $checked-row-border-color: $checked-row-color,
      $active-row-background: cv.getVar("table-row-active-background-color"),
      $active-row-color: cv.getVar("table-row-active-color"),
      $active-row-border-color: $active-row-color,
      $background: cv.getVar("table-background-color"),
      $striped-row-background: cv.getVar("table-striped-row-even-background-color"),
      $sticky-column-border-color: cv.getVar("border"),
      $sticky-column-active-row-border-color: $active-row-border-color,
      $hover-background-color: cv.getVar("table-row-hover-background-color"),
      $even-row-hover-background-color: cv.getVar("table-striped-row-even-hover-background-color"),
      $cell-border-color: cv.getVar("table-cell-border-color"),
    );
    `})]})}function I(e={}){const{wrapper:r}={...i(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(n,{...e})}):n(e)}export{I as default};
