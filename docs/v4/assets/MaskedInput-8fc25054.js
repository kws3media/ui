import{j as t,M as a}from"./version-858a7250.js";import{M as m,C as i,d as p,e as s}from"./index-d858fea5.js";import{d as e}from"./index-356e4a49.js";import{S as c}from"./MaskedInput.stories-b8f48efa.js";import{u as r}from"./index-f9328ec3.js";import"./iframe-16f5c175.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-e0c59018.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function o(n){const d=Object.assign({h1:"h1",h3:"h3",h4:"h4"},r(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsx(d.h1,{id:"maskedinput",children:"MaskedInput"}),`
`,t.jsx(m,{of:c}),`
`,t.jsx(i,{}),`
`,t.jsx(p,{}),`
`,t.jsx(d.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(d.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(s,{language:"javascript",code:e`import { MaskedInput } from '@kws3/ui';`}),`
`,t.jsx(d.h3,{id:"mask-array-examples",children:"Mask array examples"}),`
`,t.jsx(s,{language:"jsx",code:e`
    <!-- US Phone number -->
    <MaskedInput
      mask={[
        "(", /[1-9]/, /\d/, /\d/, ")", " ",
        /\d/, /\d/, /\d/, "-",
        /\d/, /\d/, /\d/, /\d/
      ]}
    />
    <!-- Credit card -->
    <MaskedInput
      mask={[
        /\d/, /\d/, /\d/, /\d/, " ",
        /\d/, /\d/, /\d/, /\d/, " ",
        /\d/, /\d/, /\d/, /\d/, " ",
        /\d/, /\d/, /\d/, /\d/
      ]}
    />
    <!-- dd/mm/YYYY -->
    <MaskedInput
      mask={[
        /\d/, /\d/, "/",
        /\d/, /\d/, "/",
        /[1-2]/, /\d/, /\d/, /\d/
      ]}
    />
    `})]})}function w(n={}){const{wrapper:d}=Object.assign({},r(),n.components);return d?t.jsx(d,Object.assign({},n,{children:t.jsx(o,n)})):o(n)}export{w as default};
