var n=Object.freeze,d=Object.defineProperty;var e=(r,t)=>n(d(r,"raw",{value:n(t||r.slice())}));import{j as o}from"./jsx-runtime-f9e34c97.js";import{u as c}from"./index-e985353b.js";import{M as h,C as l,e as f,f as s}from"./index-2a9cb901.js";import{d as i}from"./index-356e4a49.js";import{M as u}from"./version-42e95f6f.js";import{S as x,M as j}from"./Portal.stories-ebd78575.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-80400b1c.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var p,a;function m(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",...c(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(u,{}),`
`,o.jsx(t.h1,{id:"portal",children:"Portal"}),`
`,o.jsx(t.h2,{id:"component-for-rendering-outside-the-dom-of-parent-component",children:"Component for rendering outside the DOM of parent component"}),`
`,o.jsx(h,{of:x}),`
`,o.jsx(l,{of:j}),`
`,o.jsx(f,{}),`
`,o.jsxs(t.p,{children:["This is a re-export of ",o.jsx(t.code,{children:"svelte-portal"}),`.
See `,o.jsx(t.a,{href:"https://github.com/romkor/svelte-portal/blob/2.1.2/README.md",rel:"nofollow",children:"https://github.com/romkor/svelte-portal/blob/2.1.2/README.md"})," for more information."]}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(s,{code:i(p||(p=e([`
  <Portal target="body">
    <div class="toast">Entity successfully updated!</div>
  </Portal>

  <script>
    import { Portal } from '@kws3/ui';
  <\/script>
  `])))}),`
`,o.jsx(t.h5,{id:"import-the-action",children:"Import the action:"}),`
`,o.jsx(s,{code:i(a||(a=e([`
  <div class="toast" use:portal={document.body}>Entity successfully updated!</div>

  <script>
    import { portal } from '@kws3/ui';
    // notice the character case
  <\/script>
  `])))})]})}function O(r={}){const{wrapper:t}={...c(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{O as default};
