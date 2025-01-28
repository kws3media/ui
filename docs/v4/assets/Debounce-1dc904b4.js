import{j as e}from"./jsx-runtime-12dc9aff.js";import{u as r}from"./index-21e7f950.js";import{ae as s,ag as i}from"./index-399a5e71.js";import{M as c}from"./version-88c41878.js";import{S as d,M as a}from"./Debounce.stories-a243164d.js";import"./iframe-5a90e6f6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";function t(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(s,{of:d}),`
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
`,e.jsx(i,{of:a})]})}function w(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{w as default};
