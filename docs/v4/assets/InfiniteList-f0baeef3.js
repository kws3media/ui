import{j as n,M as o}from"./version-1ebd099f.js";import{M as a,C as r,d,e as l}from"./index-ed8b7af3.js";import{d as m}from"./index-356e4a49.js";import{S as c,M as h}from"./InfiniteList.stories-12058de4.js";import{u as s}from"./index-71d4d6da.js";import"./iframe-d0aba181.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-31c1923f.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./utils-92f6f0d7.js";function i(t){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",h5:"h5",pre:"pre",code:"code"},s(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsx(e.h1,{id:"infinitelist",children:"InfiniteList"}),`
`,n.jsx(e.h2,{id:"infinitelist-component-that-fires-an-event-when-the-end-of-the-list-is-reached-so-you-can-load-more-list-items",children:"InfiniteList component that fires an event when the end of the list is reached, so you can load more list items"}),`
`,n.jsx(e.h3,{id:"much-simpler-than-scrollablelist-as-it-does-not-do-any-list-virtualisation-to-reduce-dom-nodes",children:"Much simpler than ScrollableList, as it does not do any list virtualisation to reduce DOM Nodes"}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h5,{id:"import-the-component",children:"Import the component:"}),`
`,n.jsx(l,{language:"javascript",code:m`import { InfiniteList } from '@kws3/ui';`}),`
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
`})})]})]})]})}function E(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(i,t)})):i(t)}export{E as default};
