import{j as e}from"./jsx-runtime-f9e34c97.js";import{u as r}from"./index-e985353b.js";import{M as s,d as i}from"./index-2a9cb901.js";import{M as c}from"./version-42e95f6f.js";import{S as d,M as a}from"./Debounce.stories-ad8e4131.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";function t(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
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
