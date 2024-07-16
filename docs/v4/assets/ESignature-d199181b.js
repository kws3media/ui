var i=Object.freeze,d=Object.defineProperty;var r=(e,n)=>i(d(e,"raw",{value:i(n||e.slice())}));import{j as t}from"./jsx-runtime-822190ba.js";import{u as p}from"./index-67f97c62.js";import{T as u,M as c,C as h,e as x,f as o}from"./index-990f178a.js";import{S as l,M as g}from"./ESignature.stories-6bce6ad6.js";import{d as s}from"./index-356e4a49.js";import{M as f}from"./version-847f8cc0.js";import"./iframe-4b7f32ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-5b1df549.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var m;function a(e){const n={h2:"h2",h3:"h3",h5:"h5",...p(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(f,{}),`
`,t.jsx(u,{}),`
`,t.jsx(n.h2,{id:"esignature-component-for-taking-user-pen-input",children:"ESignature component for taking user pen input."}),`
`,t.jsx(c,{of:l}),`
`,t.jsx(h,{of:g}),`
`,t.jsx(x,{}),`
`,t.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o,{code:s`import { ESignature } from '@kws3/ui';`}),`
`,t.jsx(n.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(o,{code:s`@use '@kws3/ui/styles/Canvas.scss';`}),`
`,t.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,t.jsx(o,{language:"html",code:s(m||(m=r([`
    <ESignature
      bind:image
      bind:is_touched
      {width}
      {height}
      {readonly}
      {disabled}
    />
    
  <script>
    import { ESignature } from '@kws3/ui';
    export let width = "520px",
      height = "170px",
      background_image = "",
      readonly = false,
      disabled = false,
      image = "",
      is_touched = false;
    
  <\/script>
  `])))})]})}function $(e={}){const{wrapper:n}={...p(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a(e)}export{$ as default};
