var o=Object.freeze,c=Object.defineProperty;var r=(e,s)=>o(c(e,"raw",{value:o(s||e.slice())}));import{j as t,M as d}from"./version-46984b68.js";import{D as u,M as g,C as h,d as x,e as n}from"./index-533cc3fe.js";import{S as l,M as j}from"./ESignature.stories-af7448b5.js";import{d as i}from"./index-356e4a49.js";import{u as p}from"./index-0255daf9.js";import"./iframe-4dbfbe64.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./RadialChart-673b8adc.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";var m;function a(e){const s=Object.assign({h3:"h3",h5:"h5"},p(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
`,t.jsx(u,{markdown:i`
# ESignature
## ESignature component for taking user pen input.
`}),`
`,t.jsx(g,{of:l}),`
`,t.jsx(h,{of:j}),`
`,t.jsx(x,{}),`
`,t.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(n,{language:"javascript",code:i`import { ESignature } from '@kws3/ui';`}),`
`,t.jsx(s.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(n,{language:"javascript",code:i`@import '@kws3/ui/styles/Canvas.scss';`}),`
`,t.jsx(s.h3,{id:"usage-example",children:"Usage Example"}),`
`,t.jsx(n,{language:"html",code:i(m||(m=r([`
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
  `])))})]})}function q(e={}){const{wrapper:s}=Object.assign({},p(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(a,e)})):a(e)}export{q as default};
