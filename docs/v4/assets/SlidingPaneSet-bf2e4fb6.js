var s=Object.freeze,l=Object.defineProperty;var r=(e,t)=>s(l(e,"raw",{value:s(t||e.slice())}));import{j as n,M as c}from"./version-86b1272d.js";import{u as p}from"./index-beec74fd.js";import{M as d,C as h,e as x,f as i}from"./index-f5d408b8.js";import{d as o}from"./index-356e4a49.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S}from"./SlidingPaneSet.stories-6fd33f60.js";import"./iframe-8c41e289.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-071af029.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var m;function a(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",...p(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{}),`
`,n.jsx(t.h1,{id:"slidingpaneset",children:"SlidingPaneSet"}),`
`,n.jsx(t.h2,{id:"slidingpaneset-component-for-the-container-of-slidingpane",children:"SlidingPaneSet component for the container of SlidingPane"}),`
`,n.jsx(d,{of:S}),`
`,n.jsx(h,{}),`
`,n.jsx(x,{}),`
`,n.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,n.jsx(i,{code:o`import { SlidingPaneSet } from '@kws3/ui';`}),`
`,n.jsx(t.h5,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,n.jsx(i,{code:o`@import '@kws3/ui/styles/SlidingPane.scss';`}),`
`,n.jsx(t.h4,{id:"example",children:"Example"}),`
`,n.jsx(i,{language:"html",code:o(m||(m=r([`
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
  `])))})]})}function U(e={}){const{wrapper:t}={...p(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{U as default};
