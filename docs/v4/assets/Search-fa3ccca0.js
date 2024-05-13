import{j as e,M as s}from"./version-5c76052d.js";import{u as a}from"./index-a0b883bb.js";import{M as i,d as o}from"./index-37ed338a.js";import{S as c,M as d}from"./Search.stories-0fd376a9.js";import"./iframe-88f54f4e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-5da554f5.js";import"./index-af29543d.js";function r(t){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{}),`
`,e.jsx(i,{of:c}),`
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
`,e.jsx(o,{of:d})]})}function z(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{z as default};
