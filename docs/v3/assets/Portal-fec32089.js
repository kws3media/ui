var n=Object.freeze,d=Object.defineProperty;var r=(e,o)=>n(d(e,"raw",{value:n(o||e.slice())}));import{j as t,M as h}from"./version-6bd470a9.js";import{M as l,C as u,d as j,e as s}from"./index-b35ce1a0.js";import{d as i}from"./index-356e4a49.js";import{S as f,M as x}from"./Portal.stories-c007d7ef.js";import{u as m}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-07c156ff.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";var p,c;function a(e){const o=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h5:"h5"},m(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{}),`
`,t.jsx(o.h1,{id:"portal",children:"Portal"}),`
`,t.jsx(o.h2,{id:"component-for-rendering-outside-the-dom-of-parent-component",children:"Component for rendering outside the DOM of parent component"}),`
`,t.jsx(l,{of:f}),`
`,t.jsx(u,{of:x}),`
`,t.jsx(j,{}),`
`,t.jsxs(o.p,{children:["This is a re-export of ",t.jsx(o.code,{children:"svelte-portal"}),`.
See https://github.com/romkor/svelte-portal/blob/2.1.2/README.md for more information.`]}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(s,{language:"javascript",code:i(p||(p=r([`
  <Portal target="body">
    <div class="toast">Entity successfully updated!</div>
  </Portal>

  <script>
    import { Portal } from '@kws3/ui';
  <\/script>
  `])))}),`
`,t.jsx(o.h5,{id:"import-the-action",children:"Import the action:"}),`
`,t.jsx(s,{language:"javascript",code:i(c||(c=r([`
  <div class="toast" use:portal={document.body}>Entity successfully updated!</div>

  <script>
    import { portal } from '@kws3/ui';
    // notice the character case
  <\/script>
  `])))})]})}function T(e={}){const{wrapper:o}=Object.assign({},m(),e.components);return o?t.jsx(o,Object.assign({},e,{children:t.jsx(a,e)})):a(e)}export{T as default};
