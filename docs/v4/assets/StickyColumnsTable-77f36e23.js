import{j as e}from"./jsx-runtime-f9e34c97.js";import{u as r}from"./index-e985353b.js";import{M as a,C as h,e as d,f as s}from"./index-2a9cb901.js";import{d as i}from"./index-356e4a49.js";import{M as l}from"./version-42e95f6f.js";import{S as c,M as m}from"./StickyColumnsTable.stories-1d147ccd.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./index-ce0c298e.js";import"./RadialChart-80400b1c.js";import"./index-4339844e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function n(o){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(t.h1,{id:"stickycolumnstablewrapper",children:"StickyColumnsTableWrapper"}),`
`,e.jsx(t.h2,{id:"stickycolumnstablewrapper-component-in-datagrid",children:"StickyColumnsTableWrapper component in datagrid."}),`
`,e.jsx(t.h4,{id:"display-a-table-where-a-variable-number-of-columns-could-stick-to-the-leftif-the-table-width-exceeds-the-width-of-the-viewport",children:"Display a table where a variable number of columns could stick to the left,if the table width exceeds the width of the viewport."}),`
`,e.jsx(t.h4,{id:"additionally-a-shadow-is-displayed-when-there-are-parts-of-the-table-hidden-by-the-scrollable-area",children:"Additionally, a shadow is displayed when there are parts of the table hidden by the scrollable area."}),`
`,e.jsx(h,{of:m}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{code:i`import { StickyColumnsTableWrapper } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:"This component requires Grid.css to work"}),`
`,e.jsx(s,{code:i`@import '@kws3/ui/styles/Grid.scss';`}),`
`,e.jsx(t.p,{children:"See GridView for SCSS customization variables"}),`
`,e.jsxs(t.p,{children:["This component expects a ",e.jsx(t.code,{children:"table.table"})," in it's slot.",e.jsx(t.br,{}),`
`,"Each column that you want to be fixed on scroll, has to have a class of ",e.jsx(t.code,{children:"is-sticky-column"}),". And has to have a CSS ",e.jsx(t.code,{children:"left"})," value.",e.jsx(t.br,{}),`
`,"This has to be attached to all ",e.jsx(t.code,{children:"<td>"})," and ",e.jsx(t.code,{children:"<th>"})," elements in that column."]})]})}function W(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{W as default};
