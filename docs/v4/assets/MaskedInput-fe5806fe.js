import{j as d}from"./jsx-runtime-3fcd980c.js";import{u as s}from"./index-8b4f4e69.js";import{M as m,C as a,e as i,f as o}from"./index-13487d6d.js";import{d as e}from"./index-356e4a49.js";import{M as p}from"./version-b4edb0a0.js";import{S as c}from"./MaskedInput.stories-148493ea.js";import"./iframe-b8547dc1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-26b60ffd.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function r(n){const t={h1:"h1",h3:"h3",h4:"h4",...s(),...n.components};return d.jsxs(d.Fragment,{children:[d.jsx(p,{}),`
`,d.jsx(t.h1,{id:"maskedinput",children:"MaskedInput"}),`
`,d.jsx(m,{of:c}),`
`,d.jsx(a,{}),`
`,d.jsx(i,{}),`
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
    `})]})}function _(n={}){const{wrapper:t}={...s(),...n.components};return t?d.jsx(t,{...n,children:d.jsx(r,{...n})}):r(n)}export{_ as default};
