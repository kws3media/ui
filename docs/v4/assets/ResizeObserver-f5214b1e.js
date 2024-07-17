import{j as e}from"./jsx-runtime-395e6f4a.js";import{u as o}from"./index-f84756d5.js";import{ae as i,ag as t}from"./index-36797c46.js";import{M as m}from"./version-80223c14.js";import{S as a,M as p}from"./ResizeObserver.stories-f222eea8.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";function n(s){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),`
`,e.jsx(i,{of:a}),`
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
`,e.jsx(t,{of:p})]})}function O(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{O as default};
