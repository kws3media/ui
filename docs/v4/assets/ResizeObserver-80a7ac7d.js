import{j as e,M as t}from"./version-858a7250.js";import{M as o,b as m}from"./index-d858fea5.js";import{S as a,M as c}from"./ResizeObserver.stories-9ec7498b.js";import{u as i}from"./index-f9328ec3.js";import"./iframe-16f5c175.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-9bc519a8.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";function n(s){const r=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{}),`
`,e.jsx(o,{of:a}),`
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
`,e.jsx(m,{of:c})]})}function w(s={}){const{wrapper:r}=Object.assign({},i(),s.components);return r?e.jsx(r,Object.assign({},s,{children:e.jsx(n,s)})):n(s)}export{w as default};
