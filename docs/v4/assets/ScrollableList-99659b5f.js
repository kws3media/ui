import{j as e,M as o}from"./version-b0b5f48d.js";import{u as i}from"./index-41ab6891.js";import{M as l,C as a,e as r,f as d}from"./index-045aef30.js";import{d as m}from"./index-356e4a49.js";import{S as c,M as h}from"./ScrollableList.stories-70661bc8.js";import"./iframe-0d8aea47.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-0c9d9241.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./utils-92f6f0d7.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(n.h1,{id:"scrollablelist",children:"ScrollableList"}),`
`,e.jsx(n.h2,{id:"scrollablelist-component-that-efficiently-displays-large-amounts-of-data",children:"ScrollableList component that efficiently displays large amounts of data"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(d,{code:m`import { ScrollableList } from '@kws3/ui';`}),`
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
`})})]})]})]})}function E(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{E as default};
