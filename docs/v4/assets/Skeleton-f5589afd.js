import{j as t,M as i}from"./version-8c81c218.js";import{u as a}from"./index-88e578b6.js";import{M as l,P as c,e as m,f as s}from"./index-4d8b0680.js";import{d as n}from"./index-356e4a49.js";import{S as p}from"./Skeleton.stories-11fc4f40.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-9a800552.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function r(o){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsx(e.h1,{id:"skeleton",children:"Skeleton"}),`
`,t.jsx(e.h2,{id:"component-to-display-a-loading-status-as-a-skeleton-of-the-content-to-load",children:"Component to display a loading status as a skeleton of the content to load."}),`
`,t.jsx(l,{of:p}),`
`,t.jsx(c,{}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(s,{code:n`import { Skeleton } from '@kws3/ui';`}),`
`,t.jsxs(e.p,{children:["It is possible to let this component mimic the appearance of Bulma elements if you attach an appropriate CSS class to the ",t.jsx(e.code,{children:"class"}),` property.
For example:`]}),`
`,t.jsx(s,{language:"html",code:n`
  <!--Displays like a button-->
  <Skeleton class="button" color="primary" />
  <!--Displays like a input-->
  <Skeleton class="input" />
  <!--Displays like a box-->
  <Skeleton class="box" />
  `}),`
`,t.jsx(e.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(e.p,{children:t.jsx(e.em,{children:"Default values shown as example"})}),`
`,t.jsx(s,{code:n`
    @use '@kws3/ui/styles/Skeleton.scss' with (
      $theme-colors: $colors;
      $color: hsla(
        cv.getVar("text-h"),
        cv.getVar("text-s"),
        cv.getVar("text-weak-l"),
        0.2
      );
      $hilight-color: hsla(
        cv.getVar("text-h"),
        cv.getVar("text-s"),
        cv.getVar("text-80-l"),
        0.2
      );
    );
    `})]})}function X(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{X as default};
