import{j as e,M as r}from"./version-46984b68.js";import{M as i,b as c}from"./index-533cc3fe.js";import{S as a,M as d}from"./Debounce.stories-42e443a3.js";import{u as s}from"./index-0255daf9.js";import"./iframe-4dbfbe64.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";function t(o){const n=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),`
`,e.jsx(i,{of:a}),`
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
`,e.jsx(c,{of:d})]})}function D(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{D as default};
