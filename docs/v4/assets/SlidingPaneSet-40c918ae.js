var o=Object.freeze,l=Object.defineProperty;var r=(e,n)=>o(l(e,"raw",{value:o(n||e.slice())}));import{j as t,M as c}from"./version-72fc2edc.js";import{M as d,C as h,d as g,e as i}from"./index-6f124e12.js";import{d as s}from"./index-356e4a49.js";import"./chunk-WFFRPTHA-e4fb21b4.js";import{S as x}from"./SlidingPaneSet.stories-3b05a72c.js";import{u as p}from"./index-68d4b3c0.js";import"./iframe-133915fa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./RadialChart-894fbdd2.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";var m;function a(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",h5:"h5",h4:"h4"},p(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),`
`,t.jsx(n.h1,{id:"slidingpaneset",children:"SlidingPaneSet"}),`
`,t.jsx(n.h2,{id:"slidingpaneset-component-for-the-container-of-slidingpane",children:"SlidingPaneSet component for the container of SlidingPane"}),`
`,t.jsx(d,{of:x}),`
`,t.jsx(h,{}),`
`,t.jsx(g,{}),`
`,t.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(i,{language:"javascript",code:s`import { SlidingPaneSet } from '@kws3/ui';`}),`
`,t.jsx(n.h5,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(i,{language:"javascript",code:s`@import '@kws3/ui/styles/SlidingPane.scss';`}),`
`,t.jsx(n.h4,{id:"example",children:"Example"}),`
`,t.jsx(i,{language:"html",code:s(m||(m=r([`
    <SlidingPaneSet {style} class={klass} {vertical}>
      <SlidingPane />
    </SlidingPaneSet>
    <script>
      import { SlidingPaneSet, SlidingPane } from "@kws3/ui";
      export let style = "height:250px",
        vertical = true;
      let klass = "some-class";
      export { klass as class };
    <\/script>
  `])))})]})}function U(e={}){const{wrapper:n}=Object.assign({},p(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(a,e)})):a(e)}export{U as default};
