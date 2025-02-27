var n=Object.freeze,d=Object.defineProperty;var e=(r,t)=>n(d(r,"raw",{value:n(t||r.slice())}));import{j as o}from"./jsx-runtime-44943e22.js";import{u as c}from"./index-374686ce.js";import{ae as h,af as l,ah as f,ai as s}from"./index-b94b5a14.js";import{d as i}from"./index-356e4a49.js";import{M as u}from"./version-0bcf7c36.js";import{S as x,M as j}from"./Portal.stories-454b26d4.js";import"./iframe-805611d7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-06312636.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var m,p;function a(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",...c(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(u,{}),`
`,o.jsx(t.h1,{id:"portal",children:"Portal"}),`
`,o.jsx(t.h2,{id:"component-for-rendering-outside-the-dom-of-parent-component",children:"Component for rendering outside the DOM of parent component"}),`
`,o.jsx(h,{of:x}),`
`,o.jsx(l,{of:j}),`
`,o.jsx(f,{}),`
`,o.jsxs(t.p,{children:["This is a re-export of ",o.jsx(t.code,{children:"svelte-portal"}),`.
See `,o.jsx(t.a,{href:"https://github.com/romkor/svelte-portal/blob/2.1.2/README.md",rel:"nofollow",children:"https://github.com/romkor/svelte-portal/blob/2.1.2/README.md"})," for more information."]}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(s,{code:i(m||(m=e([`
  <Portal target="body">
    <div class="toast">Entity successfully updated!</div>
  </Portal>

  <script>
    import { Portal } from '@kws3/ui';
  <\/script>
  `])))}),`
`,o.jsx(t.h5,{id:"import-the-action",children:"Import the action:"}),`
`,o.jsx(s,{code:i(p||(p=e([`
  <div class="toast" use:portal={document.body}>Entity successfully updated!</div>

  <script>
    import { portal } from '@kws3/ui';
    // notice the character case
  <\/script>
  `])))})]})}function O(r={}){const{wrapper:t}={...c(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(a,{...r})}):a(r)}export{O as default};
