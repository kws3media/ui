import{j as n}from"./jsx-runtime-395e6f4a.js";import{u as s}from"./index-f84756d5.js";import{ae as o,af as r,ah as a,ai as d}from"./index-36797c46.js";import{d as l}from"./index-356e4a49.js";import{M as m}from"./version-80223c14.js";import{S as c,M as h}from"./InfiniteList.stories-de09014c.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-ecf50d11.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./utils-92f6f0d7.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{}),`
`,n.jsx(e.h1,{id:"infinitelist",children:"InfiniteList"}),`
`,n.jsx(e.h2,{id:"infinitelist-component-that-fires-an-event-when-the-end-of-the-list-is-reached-so-you-can-load-more-list-items",children:"InfiniteList component that fires an event when the end of the list is reached, so you can load more list items"}),`
`,n.jsx(e.h4,{id:"much-simpler-than-scrollablelist-as-it-does-not-do-any-list-virtualisation-to-reduce-dom-nodes",children:"Much simpler than ScrollableList, as it does not do any list virtualisation to reduce DOM Nodes"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h5,{id:"import-the-component",children:"Import the component:"}),`
`,n.jsx(d,{code:l`import { InfiniteList } from '@kws3/ui';`}),`
`,n.jsxs("div",{class:"columns",children:[n.jsxs("div",{class:"column",children:[n.jsxs("p",{children:[`Normal Usage Example:
`,n.jsx("br",{}),"You can define the ",n.jsx("code",{children:"let"})," variables on main component"]}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InfiniteList
  {items}
  {end_offset}
  on:end={endReached}
  let:item
  let:index
>
  <ListItem {item} {index} />
</InfiniteList>
`})})]}),n.jsxs("div",{class:"column",children:[n.jsxs("p",{children:[`Usage with loader slot Example:
`,n.jsx("br",{}),"You have to define the ",n.jsx("code",{children:"let"})," variables in a slot wrapper"]}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InfiniteList
  {items}
  {end_offset}
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
</InfiniteList>
`})})]})]})]})}function E(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{E as default};
