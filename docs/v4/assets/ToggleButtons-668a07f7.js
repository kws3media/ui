import{j as s,M as c}from"./version-46c3a277.js";import{D as r,M as m,C as l,d as p,e as o}from"./index-022903f7.js";import{d as e}from"./index-356e4a49.js";import{S as d,M as u}from"./ToggleButtons.stories-5edf86a6.js";import{u as a}from"./index-7fbbac9d.js";import"./iframe-437dea7a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-d7ee443d.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function i(n){const t=Object.assign({h3:"h3",h4:"h4",p:"p",code:"code",strong:"strong"},a(),n.components);return s.jsxs(s.Fragment,{children:[s.jsx(c,{}),`
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
