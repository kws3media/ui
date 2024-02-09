import{j as s,M as c}from"./version-858a7250.js";import{D as r,M as m,C as l,d as p,e as o}from"./index-d858fea5.js";import{d as e}from"./index-356e4a49.js";import{S as d,M as u}from"./ToggleButtons.stories-d9dac4b8.js";import{u as a}from"./index-f9328ec3.js";import"./iframe-16f5c175.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-e0c59018.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function i(n){const t=Object.assign({h3:"h3",h4:"h4",p:"p",code:"code",strong:"strong"},a(),n.components);return s.jsxs(s.Fragment,{children:[s.jsx(c,{}),`
`,s.jsx(r,{markdown:e`
# ToggleButtons
## Segmented ToggleButtons Buttons
`}),`
`,s.jsx(m,{of:d}),`
`,s.jsx(l,{of:u}),`
`,s.jsx(p,{}),`
`,s.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(o,{language:"javascript",code:e`import { ToggleButtons  } from '@kws3/ui';`}),`
`,s.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(o,{language:"javascript",code:e`@import '@kws3/ui/styles/Toggle.scss';`}),`
`,s.jsx(t.h4,{id:"custom-active-and-inactive-classes",children:"Custom Active and Inactive classes"}),`
`,s.jsxs(t.p,{children:["Each button can have a custom ",s.jsx(t.code,{children:"active_class"})," or ",s.jsx(t.code,{children:"inactive_class"}),"."]}),`
`,s.jsxs(t.p,{children:["This class will override the main active/inactive class of the component, ",s.jsx(t.strong,{children:"Example:"})]}),`
`,s.jsx(o,{language:"jsx",code:e`
    <ToggleButtons
      ...
      options='{[
        {..., active_class:"is-success", inactive_class:"is-outlined is-success"},
        {..., active_class:"is-danger", inactive_class:"is-outlined is-danger"},
        {..., active_class:"is-info", inactive_class:"is-outlined is-info"}
      ]}'
    />
    `})]})}function y(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?s.jsx(t,Object.assign({},n,{children:s.jsx(i,n)})):i(n)}export{y as default};
