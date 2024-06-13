import{j as d,M as m}from"./version-f6a9f08d.js";import{u as r}from"./index-5b876d48.js";import{M as a,C as i,e as p,f as o}from"./index-564c5f40.js";import{d as e}from"./index-356e4a49.js";import{S as c}from"./MaskedInput.stories-091f386f.js";import"./iframe-6387451d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-d4ecf1af.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(n){const t={h1:"h1",h3:"h3",h4:"h4",...r(),...n.components};return d.jsxs(d.Fragment,{children:[d.jsx(m,{}),`
`,d.jsx(t.h1,{id:"maskedinput",children:"MaskedInput"}),`
`,d.jsx(a,{of:c}),`
`,d.jsx(i,{}),`
`,d.jsx(p,{}),`
`,d.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,d.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,d.jsx(o,{code:e`import { MaskedInput } from '@kws3/ui';`}),`
`,d.jsx(t.h3,{id:"mask-array-examples",children:"Mask array examples"}),`
`,d.jsx(o,{language:"jsx",code:e`
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
    `})]})}function U(n={}){const{wrapper:t}={...r(),...n.components};return t?d.jsx(t,{...n,children:d.jsx(s,{...n})}):s(n)}export{U as default};
