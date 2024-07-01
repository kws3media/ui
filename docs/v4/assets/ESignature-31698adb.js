var i=Object.freeze,d=Object.defineProperty;var r=(e,n)=>i(d(e,"raw",{value:i(n||e.slice())}));import{j as t,M as u}from"./version-b520517b.js";import{u as p}from"./index-45417e07.js";import{T as c,M as h,C as x,e as l,f as s}from"./index-bebc8d91.js";import{S as g,M as f}from"./ESignature.stories-5eb93d65.js";import{d as o}from"./index-356e4a49.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-55d2132c.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var m;function a(e){const n={h2:"h2",h3:"h3",h5:"h5",...p(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),`
`,t.jsx(c,{}),`
`,t.jsx(n.h2,{id:"esignature-component-for-taking-user-pen-input",children:"ESignature component for taking user pen input."}),`
`,t.jsx(h,{of:g}),`
`,t.jsx(x,{of:f}),`
`,t.jsx(l,{}),`
`,t.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(s,{code:o`import { ESignature } from '@kws3/ui';`}),`
`,t.jsx(n.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(s,{code:o`@use '@kws3/ui/styles/Canvas.scss';`}),`
`,t.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,t.jsx(s,{language:"html",code:o(m||(m=r([`
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
  `])))})]})}function R(e={}){const{wrapper:n}={...p(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a(e)}export{R as default};
