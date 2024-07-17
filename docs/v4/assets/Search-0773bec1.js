import{j as e}from"./jsx-runtime-395e6f4a.js";import{u as a}from"./index-f84756d5.js";import{ae as s,ag as o}from"./index-36797c46.js";import{M as i}from"./version-80223c14.js";import{S as c,M as d}from"./Search.stories-b18e9f7d.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-5da554f5.js";import"./index-af29543d.js";function r(t){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"makesearchengine",children:"makeSearchEngine"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"makeSearchEngine"})," is a factory helper to create a search engine with options."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"}),`
searchOptions : `,e.jsx(n.code,{children:"type: Object"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
Function take params, needle : `,e.jsx(n.code,{children:"type: String"})," and haystack : ",e.jsx(n.code,{children:"type: Array"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div>
  <input type="text" bind:value={needle} class="input" />
</div>
<pre>{JSON.stringify(filtered_data, null, 4)}</pre>

<script>
  import { makeSearchEngine } from "@kws3/ui/search";

  let needle = "";
  let haystack = [
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "DDAA" },
    { id: 5, name: "EEBB" },
  ];
  let filtered_data = [];

  let searchOptions = {
    search_key: "name", // optional, default 'value'
    scoreThreshold: 5, // optional, default 5
    fuzzyOpts : {
      analyzeSubTerms: true, // Whether or not analyze sub-terms, default false
      analyzeSubTermDepth: 10, //How many sub terms should be analyzed , default 10,
      highlighting: {
        before: "", // markup to add before mattched charectar, default '<em>'
        after: "", // markup to add after mattched charectar, default '</em>'
      },
    }
  }

  const fuzzysearch = makeSearchEngine(searchOptions);

  $: search();

  function search() {
    filtered_data = fuzzysearch(needle, haystack);
  }
<\/script>
`})}),`
`,e.jsx(o,{of:d})]})}function b(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{b as default};
