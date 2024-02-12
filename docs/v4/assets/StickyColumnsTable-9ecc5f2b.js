import{j as e,M as r}from"./version-006acd3a.js";import{M as c,C as h,d as l,e as s}from"./index-2f8575b5.js";import{d as i}from"./index-356e4a49.js";import{S as d,M as p}from"./StickyColumnsTable.stories-774ab6c6.js";import{u as a}from"./index-19db5137.js";import"./iframe-3cfa3624.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-9bc519a8.js";import"./index-87030aea.js";import"./RadialChart-a276cee1.js";import"./index-c009752d.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function n(o){const t=Object.assign({h1:"h1",h2:"h2",h4:"h4",h3:"h3",p:"p",code:"code",br:"br"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(t.h1,{id:"stickycolumnstablewrapper",children:"StickyColumnsTableWrapper"}),`
`,e.jsx(t.h2,{id:"stickycolumnstablewrapper-component-in-datagrid",children:"StickyColumnsTableWrapper component in datagrid."}),`
`,e.jsx(t.h4,{id:"display-a-table-where-a-variable-number-of-columns-could-stick-to-the-leftif-the-table-width-exceeds-the-width-of-the-viewport",children:"Display a table where a variable number of columns could stick to the left,if the table width exceeds the width of the viewport."}),`
`,e.jsx(t.h4,{id:"additionally-a-shadow-is-displayed-when-there-are-parts-of-the-table-hidden-by-the-scrollable-area",children:"Additionally, a shadow is displayed when there are parts of the table hidden by the scrollable area."}),`
`,e.jsx(h,{of:p}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{language:"javascript",code:i`import { StickyColumnsTableWrapper } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:"This component requires Grid.css to work"}),`
`,e.jsx(s,{language:"javascript",code:i`@import '@kws3/ui/styles/Grid.scss';`}),`
`,e.jsx(t.p,{children:"See GridView for SCSS customization variables"}),`
`,e.jsxs(t.p,{children:["This component expects a ",e.jsx(t.code,{children:"table.table"})," in it's slot.",e.jsx(t.br,{}),`
`,"Each column that you want to be fixed on scroll, has to have a class of ",e.jsx(t.code,{children:"is-sticky-column"}),". And has to have a CSS ",e.jsx(t.code,{children:"left"})," value.",e.jsx(t.br,{}),`
`,"This has to be attached to all ",e.jsx(t.code,{children:"<td>"})," and ",e.jsx(t.code,{children:"<th>"})," elements in that column."]})]})}function W(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(n,o)})):n(o)}export{W as default};
