import{j as o,M as a}from"./version-5c76052d.js";import{u as e}from"./index-a0b883bb.js";import{M as p,C as d,e as m,f as n}from"./index-37ed338a.js";import{d as r}from"./index-356e4a49.js";import{S as h}from"./PasswordInput.stories-a7f2cde3.js";import"./iframe-88f54f4e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-efdf549e.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(s){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...e(),...s.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(t.h1,{id:"password-input",children:"Password Input"}),`
`,o.jsx(t.h2,{id:"an-input-component-that-can-showhide-password",children:"An Input component that can show/hide password."}),`
`,o.jsx(p,{of:h}),`
`,o.jsx(d,{}),`
`,o.jsx(m,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(n,{code:r`import { PasswordInput } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"with-passwordvalidator",children:"With PasswordValidator:"}),`
`,o.jsx(n,{language:"html",code:r`
    <PasswordInput
      bind:value={new_pass}
      {size}
      {color}
      {placeholder}
      {has_visibility_switcher}
      {disabled} />
    <PasswordValidator password={new_pass} />
  `})]})}function S(s={}){const{wrapper:t}={...e(),...s.components};return t?o.jsx(t,{...s,children:o.jsx(i,{...s})}):i(s)}export{S as default};
