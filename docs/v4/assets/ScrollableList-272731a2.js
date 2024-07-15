import{j as e}from"./jsx-runtime-01215b87.js";import{u as o}from"./index-4b5f231d.js";import{M as i,C as l,e as r,f as a}from"./index-95581144.js";import{d}from"./index-356e4a49.js";import{M as m}from"./version-ee24219f.js";import{S as c,M as h}from"./ScrollableList.stories-31d0fef9.js";import"./iframe-1fcd48d6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-9728098f.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./utils-92f6f0d7.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),`
`,e.jsx(n.h1,{id:"scrollablelist",children:"ScrollableList"}),`
`,e.jsx(n.h2,{id:"scrollablelist-component-that-efficiently-displays-large-amounts-of-data",children:"ScrollableList component that efficiently displays large amounts of data"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(a,{code:d`import { ScrollableList } from '@kws3/ui';`}),`
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs("div",{children:[`Normal Usage Example:
`,e.jsx("br",{}),"You can define the ",e.jsx("code",{children:"let"})," variables on main component"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ScrollableList
  {items}
  {height}
  {item_height}
  {end_threshold}
  {padding_threshold}
  bind:start
  bind:end
  on:end={endReached}
  let:item
  let:index
>
  <ListItem {item} {index} />
</ScrollableList>
`})})]}),e.jsxs("div",{className:"column",children:[e.jsxs("div",{children:[`Usage with loader slot Example:
`,e.jsx("br",{}),"You have to define the ",e.jsx("code",{children:"let"})," variables in a slot wrapper"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ScrollableList
  {items}
  {height}
  {item_height}
  {end_threshold}
  {padding_threshold}
  bind:start
  bind:end
  on:end={endReached}
>
  <span
    slot="default"
    let:item
    let:index
  >
    <ListItem {item} {index} />
  </span>
  <span slot="loader">Loading...</span>
</ScrollableList>
`})})]})]})]})}function I(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{I as default};
