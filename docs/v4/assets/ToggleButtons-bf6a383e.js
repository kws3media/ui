import{j as s,M as a}from"./version-36e7533e.js";import{u as c}from"./index-106c01c9.js";import{D as r,M as m,C as l,e as d,f as e}from"./index-cb4e5ec9.js";import{d as n}from"./index-356e4a49.js";import{S as p,M as h}from"./ToggleButtons.stories-b3e34231.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-19f46828.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function i(o){const t={code:"code",h3:"h3",h4:"h4",p:"p",strong:"strong",...c(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{}),`
`,s.jsx(r,{markdown:n`
# ToggleButtons
## Segmented ToggleButtons Buttons
`}),`
`,s.jsx(m,{of:p}),`
`,s.jsx(l,{of:h}),`
`,s.jsx(d,{}),`
`,s.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(e,{code:n`import { ToggleButtons  } from '@kws3/ui';`}),`
`,s.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(e,{code:n`@import '@kws3/ui/styles/Toggle.scss';`}),`
`,s.jsx(t.h4,{id:"custom-active-and-inactive-classes",children:"Custom Active and Inactive classes"}),`
`,s.jsxs(t.p,{children:["Each button can have a custom ",s.jsx(t.code,{children:"active_class"})," or ",s.jsx(t.code,{children:"inactive_class"}),"."]}),`
`,s.jsxs(t.p,{children:["This class will override the main active/inactive class of the component, ",s.jsx(t.strong,{children:"Example:"})]}),`
`,s.jsx(e,{language:"jsx",code:n`
    <ToggleButtons
      ...
      options='{[
        {..., active_class:"is-success", inactive_class:"is-outlined is-success"},
        {..., active_class:"is-danger", inactive_class:"is-outlined is-danger"},
        {..., active_class:"is-info", inactive_class:"is-outlined is-info"}
      ]}'
    />
    `})]})}function y(o={}){const{wrapper:t}={...c(),...o.components};return t?s.jsx(t,{...o,children:s.jsx(i,{...o})}):i(o)}export{y as default};
