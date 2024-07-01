import{j as e,M as s}from"./version-b520517b.js";import{u as r}from"./index-45417e07.js";import{M as i,d as c}from"./index-bebc8d91.js";import{S as d,M as a}from"./Debounce.stories-ad8e4131.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";function t(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"debounce",children:"debounce"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Debounce"})," method Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for ",e.jsx(n.code,{children:"threshold"})," milliseconds.."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<input bind:value={keywords} on:keyup={debouncedSearch} />

<script>
  import { debounce } from "@kws3/ui/utils";
  const debouncedSearch = debounce(search, 300);

  function search() {}
<\/script>
`})}),`
`,e.jsx(c,{of:a})]})}function M(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{M as default};
