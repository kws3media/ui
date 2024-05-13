import{j as e,M as a}from"./version-5c76052d.js";import{u as r}from"./index-a0b883bb.js";import{M as h,C as d,e as l,f as s}from"./index-37ed338a.js";import{d as i}from"./index-356e4a49.js";import{S as c,M as m}from"./StickyColumnsTable.stories-af7da187.js";import"./iframe-88f54f4e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./index-ce0c298e.js";import"./RadialChart-efdf549e.js";import"./index-4339844e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function n(o){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsx(h,{of:c}),`
`,e.jsx(t.h1,{id:"stickycolumnstablewrapper",children:"StickyColumnsTableWrapper"}),`
`,e.jsx(t.h2,{id:"stickycolumnstablewrapper-component-in-datagrid",children:"StickyColumnsTableWrapper component in datagrid."}),`
`,e.jsx(t.h4,{id:"display-a-table-where-a-variable-number-of-columns-could-stick-to-the-leftif-the-table-width-exceeds-the-width-of-the-viewport",children:"Display a table where a variable number of columns could stick to the left,if the table width exceeds the width of the viewport."}),`
`,e.jsx(t.h4,{id:"additionally-a-shadow-is-displayed-when-there-are-parts-of-the-table-hidden-by-the-scrollable-area",children:"Additionally, a shadow is displayed when there are parts of the table hidden by the scrollable area."}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{code:i`import { StickyColumnsTableWrapper } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:"This component requires Grid.css to work"}),`
`,e.jsx(s,{code:i`@import '@kws3/ui/styles/Grid.scss';`}),`
`,e.jsx(t.p,{children:"See GridView for SCSS customization variables"}),`
`,e.jsxs(t.p,{children:["This component expects a ",e.jsx(t.code,{children:"table.table"})," in it's slot.",e.jsx(t.br,{}),`
`,"Each column that you want to be fixed on scroll, has to have a class of ",e.jsx(t.code,{children:"is-sticky-column"}),". And has to have a CSS ",e.jsx(t.code,{children:"left"})," value.",e.jsx(t.br,{}),`
`,"This has to be attached to all ",e.jsx(t.code,{children:"<td>"})," and ",e.jsx(t.code,{children:"<th>"})," elements in that column."]})]})}function G(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{G as default};
