import{j as t,M as e}from"./version-858a7250.js";import{M as p,C as d,d as m,e as n}from"./index-d858fea5.js";import{d as r}from"./index-356e4a49.js";import{S as h}from"./PasswordInput.stories-db168fb3.js";import{u as a}from"./index-f9328ec3.js";import"./iframe-16f5c175.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-e0c59018.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(s){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",h4:"h4"},a(),s.components);return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),`
`,t.jsx(o.h1,{id:"password-input",children:"Password Input"}),`
`,t.jsx(o.h2,{id:"an-input-component-that-can-showhide-password",children:"An Input component that can show/hide password."}),`
`,t.jsx(p,{of:h}),`
`,t.jsx(d,{}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(n,{language:"javascript",code:r`import { PasswordInput } from '@kws3/ui';`}),`
`,t.jsx(o.h4,{id:"with-passwordvalidator",children:"With PasswordValidator:"}),`
`,t.jsx(n,{language:"html",code:r`
    <PasswordInput
      bind:value={new_pass}
      {size}
      {color}
      {placeholder}
      {has_visibility_switcher}
      {disabled} />
    <PasswordValidator password={new_pass} />
  `})]})}function y(s={}){const{wrapper:o}=Object.assign({},a(),s.components);return o?t.jsx(o,Object.assign({},s,{children:t.jsx(i,s)})):i(s)}export{y as default};
