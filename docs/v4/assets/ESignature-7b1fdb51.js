var s=Object.freeze,d=Object.defineProperty;var r=(e,o)=>s(d(e,"raw",{value:s(o||e.slice())}));import{j as t,M as c}from"./version-b0b5f48d.js";import{u as p}from"./index-41ab6891.js";import{D as u,M as h,C as x,e as l,f as i}from"./index-045aef30.js";import{S as g,M as f}from"./ESignature.stories-c428bac3.js";import{d as n}from"./index-356e4a49.js";import"./iframe-0d8aea47.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-0c9d9241.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var m;function a(e){const o={h3:"h3",h5:"h5",...p(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),`
`,t.jsx(u,{markdown:n`
# ESignature
## ESignature component for taking user pen input.
`}),`
`,t.jsx(h,{of:g}),`
`,t.jsx(x,{of:f}),`
`,t.jsx(l,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(i,{code:n`import { ESignature } from '@kws3/ui';`}),`
`,t.jsx(o.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(i,{code:n`@import '@kws3/ui/styles/Canvas.scss';`}),`
`,t.jsx(o.h3,{id:"usage-example",children:"Usage Example"}),`
`,t.jsx(i,{language:"html",code:n(m||(m=r([`
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
  `])))})]})}function $(e={}){const{wrapper:o}={...p(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(a,{...e})}):a(e)}export{$ as default};
