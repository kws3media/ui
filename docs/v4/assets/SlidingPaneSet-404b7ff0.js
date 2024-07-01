var o=Object.freeze,p=Object.defineProperty;var r=(t,n)=>o(p(t,"raw",{value:o(n||t.slice())}));import{j as e,M as c}from"./version-d179474b.js";import{u as l}from"./index-e8df77e3.js";import{M as d,C as h,e as x,f as i}from"./index-23db0581.js";import{d as s}from"./index-356e4a49.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as g}from"./SlidingPaneSet.stories-72feea3f.js";import"./iframe-c2c5aa08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-af010aa6.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var m;function a(t){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(n.h1,{id:"slidingpaneset",children:"SlidingPaneSet"}),`
`,e.jsx(n.h2,{id:"slidingpaneset-component-for-the-container-of-slidingpane",children:"SlidingPaneSet component for the container of SlidingPane"}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(h,{}),`
`,e.jsx(x,{}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(i,{code:s`import { SlidingPaneSet } from '@kws3/ui';`}),`
`,e.jsx(n.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Default values shown as example"})}),`
`,e.jsx(i,{code:s`
    @use '@kws3/ui/styles/SlidingPane.scss' with(
      $easing: cv.getVar("easing"),
    );
  `}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(i,{language:"html",code:s(m||(m=r([`
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
  `])))})]})}function R(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{R as default};
