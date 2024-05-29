import{j as e,M as o}from"./version-1e8f9454.js";import{u as i}from"./index-323c8e7a.js";import{M as t,d as m}from"./index-b6c8336d.js";import{S as p,M as a}from"./ResizeObserver.stories-4d4f0bab.js";import"./iframe-74ccf227.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";function n(s){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(r.h3,{id:"resizeobserver",children:"ResizeObserver"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"resizeObserver"})," is used to handle window resizing."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Example:"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`{#if hasResizeObserver}
  <div use:resizeObserver on:resize={resizeHandler}>
{/if}

<script>
  import { hasResizeObserver, resizeObserver } from "@kws3/ui/resizeObserver";
<\/script>
`})}),`
`,e.jsx(m,{of:a})]})}function g(s={}){const{wrapper:r}={...i(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{g as default};
