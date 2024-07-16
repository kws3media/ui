import{j as e}from"./jsx-runtime-822190ba.js";import{u as o}from"./index-67f97c62.js";import{M as i,d as t}from"./index-990f178a.js";import{M as m}from"./version-847f8cc0.js";import{S as p,M as a}from"./ResizeObserver.stories-4d4f0bab.js";import"./iframe-4b7f32ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";function n(s){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),`
`,e.jsx(i,{of:p}),`
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
`,e.jsx(t,{of:a})]})}function O(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{O as default};
